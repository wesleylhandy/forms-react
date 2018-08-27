import "babel-polyfill";

import React from 'react';
import * as ReactDOM from 'react-dom';

import App from './Components/App'

if(process) {
    process.title = "ReactForm"
}

const rootEntry = document.getElementById('form-root')

ReactDOM.render( <App/>, rootEntry);