import React from 'react';
import ReactDOM from 'react-dom';
import cssVars from 'css-vars-ponyfill';

cssVars();

import './index.css';

import App from './Components/App'

ReactDOM.render( <App /> ,
    document.getElementById('form-root')
);