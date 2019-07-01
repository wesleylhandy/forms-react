import "./vendors";
import "core-js/stable"

import React from 'react';
import * as ReactDOM from 'react-dom';

import App from './Components/App'

import { callApi } from './helpers/fetch-helpers'

const rootEntry = document.getElementById('form-root')

async function getConfiguration() {
    let initialState
    try {

        const generator = rootEntry.dataset.environment ? rootEntry.dataset.environment.toLowerCase() : null;
        const formName = rootEntry.dataset.formName;
        const proxyUri = rootEntry.dataset.rest;
        const isDrupal = generator && generator.includes('drupal');
        if (isDrupal) {
            initialState = rootEntry.dataset.initialState
        } else {
            initialState = await callApi("http://10.100.43.42:8080/config/form-config.json", {method: 'GET'})
        }
       
        if (initialState.mode === "production") {
            if (window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
                window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function () {}
                if(Object.keys(window.__REACT_DEVTOOLS_GLOBAL_HOOK__._renderers).length) {
                    window.__REACT_DEVTOOLS_GLOBAL_HOOK__._renderers = {};
                }
            }
        }

    } catch (err) {
        console.error(err);
        alert('There was an internal error loading this form. Please check back later or call us at 1-800-759-0700');
    }
    return { initialState } 
}


getConfiguration().then(({initialState}) => {
    if (initialState) {
        ReactDOM.render( <App config={{initialState}}/>, rootEntry);
    } else {
        console.error({error: "Initial State is Undefined"})
        alert('There was an internal error loading this form. Please check back later or call us at 1-800-759-0700');
    }
});