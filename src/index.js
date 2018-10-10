import "babel-polyfill";
import cssVars from 'css-vars-ponyfill';
import 'whatwg-fetch';
import Promise from 'promise-polyfill';
import 'raf/polyfill';

import React from 'react';
import * as ReactDOM from 'react-dom';

import App from './Components/App'

if (process) {
    process.title = "ReactForm"
}

if (!window.Promise) {
    window.Promise = Promise;
}

const mode = "development";

async function getConfiguration() {
    
    const generator = document.head.querySelector("[name='generator']")
    const isWordpress = generator && generator.content.toLowerCase().includes('wordpress');
    const base = mode == "local" ? "http://10.100.43.50:8080/config/" : handleWordpress(isWordpress);
    const cssConfigUrl = `${base}css-config.json`;
    let cssConfig = {};
    try {
        let vars = await loadJson(cssConfigUrl);
        const styleEl = document.createElement('style');
        styleEl.type = 'text/css';
        styleEl.id = "imported-vars";
        let innerStyle = '';

        vars.forEach(variable => {
            for (let key in variable) {
                if (!/^(externalFont)\S*$/.test(key)) {
                    const pair = key + ': ' + variable[key] + ';';
                    innerStyle += pair;                     
                } else {
                    const link = document.createElement('link');
                    link.rel = "stylesheet";
                    link.type = "text/css";
                    link.href = variable[key];
                    document.head.appendChild(link);
                }
                cssConfig[key] = variable[key];
            }
        })
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

    const formConfigUrl = `${base}form-config.json`;
    let initialState;
    try {
        initialState = await loadJson(formConfigUrl);
    } catch (err) {
        console.error(err);
        alert('There was an internal error loading this form. Please check back later or call us at 1-800-759-0700');
    }

    return { cssConfig, initialState } 
}

class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}
  
async function loadJson(url) {
    let response = await fetch(url);
    if (response.status == 200) {
        return response.json();
    } else {
        throw new HttpError(response);
    }
}


/**
* Function to determine campaign name for accessing config files from CBNGiving-Plugin for WP
* @param {Boolean} isWordpress - only return value if True
* @returns {String} - URL base for Wordpress based on giving page URL
*/
function handleWordpress(isWordpress) {
    if (isWordpress) {
        return `/wp-giving/${window.location.pathname.split("/").filter(el => el !== "").pop()}/`
    }
    return ''
}

const rootEntry = document.getElementById('form-root')

getConfiguration().then(({cssConfig, initialState}) => {
    ReactDOM.render( <App config={{cssConfig, initialState}}/>, rootEntry);
});