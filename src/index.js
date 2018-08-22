import "babel-polyfill";

import React from 'react';
import * as ReactDOM from 'react-dom';

import App from './Components/App'

const rootEntry = document.getElementById('form-root')

ReactDOM.render( <App/>, rootEntry);