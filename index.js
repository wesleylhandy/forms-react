import "babel-polyfill";

import React from 'react';
import * as ReactDOM from 'react-dom';
import cssVars from 'css-vars-ponyfill';

cssVars();

import './index.css';

import App from './Components/App'

const rootEntry = document.getElementById('form-root')

ReactDOM.render( <App/>, rootEntry);