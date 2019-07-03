import "./vendors";
import "core-js/stable";

import React from "react";
import * as ReactDOM from "react-dom";

import App from "./Components/App";

import FormConfigProvider from "./Components/Contexts/FormConfigProvider";

const givingRootEntry = document.getElementById("giving-form-root");
const signupRootEntry = document.getElementById("signup-form-root");
const productRootEntry = document.getElementById("product-form-root");

if (givingRootEntry) {
	ReactDOM.render(
		<FormConfigProvider>
			<App rootEntry={givingRootEntry} />
		</FormConfigProvider>,
		givingRootEntry
	);
}

if (signupRootEntry) {
	ReactDOM.render(
		<FormConfigProvider>
			<App rootEntry={signupRootEntry} />
		</FormConfigProvider>,
		signupRootEntry
	);
}

if (productRootEntry) {
	ReactDOM.render(
		<FormConfigProvider>
			<App rootEntry={productRootEntry} />
		</FormConfigProvider>,
		productRootEntry
	);
}
