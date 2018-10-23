import "babel-polyfill";
import cssVars from 'css-vars-ponyfill';
import 'whatwg-fetch';
import Promise from 'promise-polyfill';
import 'raf/polyfill';

import React from 'react';
import * as ReactDOM from 'react-dom';

import App from './Components/App'
import { callApi } from './Components/helpers/fetch-helpers'

let mode;
if (process) {
    process.title = "ReactForm"
    mode = "local";
}

if (!window.Promise) {
    window.Promise = Promise;
}

const rootEntry = document.getElementById('form-root')

async function getConfiguration() {
    
    const generator = rootEntry.dataset.environment.toLowerCase();
    const isWordpress = generator && generator.includes('wordpress');
    const base = mode == "local" ? "http://10.100.43.50:8080/config/" : "";
    const cssConfigUrl = isWordpress ? handleWordpress(isWordpress) + "?type=css_setup" : `${base}css-config.json`;
    let cssConfig;
    try {
        cssConfig = await callApi(cssConfigUrl);
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

    const formConfigUrl = isWordpress ? handleWordpress(isWordpress) + "?type=form_setup" : `${base}form-config.json`;
    let initialState;
    try {
        initialState = await callApi(formConfigUrl);
    } catch (err) {
        console.error(err);
        alert('There was an internal error loading this form. Please check back later or call us at 1-800-759-0700');
    }

    return { cssConfig, initialState } 
}

/**
* Function to determine campaign name for accessing config files from CBNGiving-Plugin for WP
* @param {Boolean} isWordpress - only return value if True
* @returns {String} - URL base for Wordpress based on giving page URL
*/
function handleWordpress(isWordpress) {
    if (isWordpress) {
        return `/wp-json/cbngiving/v1/${window.location.pathname.split("/").filter(el => el !== "").pop()}`
    }
    return ''
}

getConfiguration().then(({cssConfig, initialState}) => {
    ReactDOM.render( <App config={{cssConfig, initialState}}/>, rootEntry);
});