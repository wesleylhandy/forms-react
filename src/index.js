import "./vendors";
import "core-js/stable"

import React from 'react';
import * as ReactDOM from 'react-dom';

import App from './Components/App'

import FormProvider from './Components/Context/FormContext'

const rootEntry = document.getElementById('form-root')

ReactDOM.render( 
    <FormProvider>
        <App rootEntry={rootEntry}/>
    </FormProvider>,
    rootEntry
);