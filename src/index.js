import "babel-polyfill";

import React from 'react';
import * as ReactDOM from 'react-dom';
import cssVars from 'css-vars-ponyfill';

import './index.css';

import App from './Components/App'

cssVars({
    include: 'style,link[rel="stylesheet"]:not([href*="//"])',
    onlyVars: true
});

const rootEntry = document.getElementById('form-root')

ReactDOM.render( <App/>, rootEntry);