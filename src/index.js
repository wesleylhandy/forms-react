import "babel-polyfill";

import React from 'react';
import * as ReactDOM from 'react-dom';
import cssVars from 'css-vars-ponyfill';

import './index.css';

import App from './Components/App'

cssVars();

const rootEntry = document.getElementById('form-root')

ReactDOM.render( <App/>, rootEntry);