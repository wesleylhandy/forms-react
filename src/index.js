import "babel-polyfill";
import cssVars from 'css-vars-ponyfill';
import 'whatwg-fetch';
import Promise from 'promise-polyfill';
import 'raf/polyfill';

import React from 'react';
import * as ReactDOM from 'react-dom';

import App from './Components/App'
import { callApi } from './Components/helpers/fetch-helpers'

if (!window.Promise) {
    window.Promise = Promise;
}

const rootEntry = document.getElementById('form-root')

async function getConfiguration() {

    const generator = rootEntry.dataset.environment.toLowerCase();
    const formName = rootEntry.dataset.formName;
    const proxyUri = rootEntry.dataset.rest;

    const isWordpress = generator && generator.includes('wordpress');
    const isDrupal = generator && generator.includes('drupal');
    const isDotNet = generator && generator.includes('dotnet');

    const base = deriveBaseUri(proxyUri, formName, isWordpress, isDrupal, isDotNet);
    
    const cssConfigUrl = base + (isWordpress ?  "?type=css_setup" : "config/css-config.json");
    let cssConfig;
    try {
        cssConfig = await callApi(cssConfigUrl);
        // console.log({cssConfig})
        cssConfig["--base-font-size"] = "19px";
        const styleEl = document.createElement('style');
        styleEl.type = 'text/css';
        styleEl.id = "imported-vars";
        let innerStyle = '';

        for (let key in cssConfig) {
            if (!/^(externalFont)\S*$/.test(key)) {
                const pair = key + ': ' + cssConfig[key] + ';';
                innerStyle += pair;                     
            } else {
                const link = document.createElement('link');
                link.rel = "stylesheet";
                link.type = "text/css";
                link.href = cssConfig[key];
                document.head.appendChild(link);
            }
        }
         // only append to DOM if innerstyle is not an empty string

        styleEl.innerHTML = ":root{" + innerStyle + "}";
        document.head.appendChild(styleEl)

        cssVars({
            updateURLs: false,
            watch: true,
            onComplete(cssText, styleNode) {
            }
        });
    } catch (err) {
        console.error(err);
        alert('There was an internal error loading this form. Please check back later or call us at 1-800-759-0700');
    }

    const formConfigUrl = base + (isWordpress ? "?type=form_setup" : "config/form-config.json");
    let initialState;
    try {
        initialState = await callApi(formConfigUrl);
        if (initialState.mode === "production") {
            if (window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
                window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function () {}
                if(Object.keys(window.__REACT_DEVTOOLS_GLOBAL_HOOK__._renderers).length) {
                    window.__REACT_DEVTOOLS_GLOBAL_HOOK__._renderers = {};
                }
            }
        }
        if (isWordpress) {
            initialState.proxy = base
        }
    } catch (err) {
        console.error(err);
        alert('There was an internal error loading this form. Please check back later or call us at 1-800-759-0700');
    }

    return { cssConfig, initialState } 
}

/**
* Function to determine campaign name for accessing config files from CBNGiving-Plugin for WP
* @param {Boolean} isWordpress - only return value if True
* @param {String} proxyUri - uri of proxy endpoint
* @param {String} formName - name of the form
* @returns {String} - URL base for Wordpress based on giving page URL
*/
function handleWordpress(isWordpress, proxyUri, formName) {
    if (isWordpress) {
        return `${proxyUri}cbngiving/v1/${formName}`
    }
    return ''
}

/**
* Function to determine campaign name for accessing config files from CBNGiving-Plugin for WP
* @param {Boolean} isDrupal - only return value if True
* @param {String} proxyUri - uri of proxy endpoint
* @param {String} formName - name of the form
* @returns {String} - URL base for Wordpress based on giving page URL
*/
function handleDrupal(isDrupal, proxyUri, formName) {
    if (isDrupal) {
        return ``
    }
    return ''
}

/**
* Function to determine campaign name for accessing config files from CBNGiving-Plugin for WP
* @param {Boolean} isDotNet - only return value if True
* @param {String} proxyUri - uri of proxy endpoint
* @param {String} formName - name of the form
* @returns {String} - URL base for Wordpress based on giving page URL
*/
function handleDotNet(isDotNet, proxyUri, formName) {
    if (isDotNet) {
        return ``
    }
    return ''
}

/**
 * Takes in data from rootEntry to determine where to find the form configuration based on environment
 * @param {String} proxyUri - data-rest
 * @param {String} formName - data-form-name
 * @param {Boolean} isWordpress - data-rest == 'wordpress'
 * @param {Boolean} isDrupal - data-rest == 'drupal'
 * @param {Boolean} isDotNet - data-rest == 'dotnet'
 * @returns {String} uri of proxy api
 */
function deriveBaseUri(proxyUri, formName, isWordpress, isDrupal, isDotNet) {
    if (isWordpress) {
        return handleWordpress(isWordpress, proxyUri, formName)
    } else if (isDrupal) {
        return handleDrupal(isDrupal, proxyUri, formName)
    } else if (isDotNet) {
        return handleDotNet(isDotNet, proxyUri, formName)
    } else {
        return proxyUri
    }
}

getConfiguration().then(({cssConfig, initialState}) => {
    ReactDOM.render( <App config={{cssConfig, initialState}}/>, rootEntry);
});