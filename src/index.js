import "./vendors";
import "core-js/stable";

import React from "react";
import * as ReactDOM from "react-dom";

import App from "./Components/App";

import FormProvider from "./Components/Context/FormContext";

const givingRootEntry = document.getElementById("giving-form-root");
const signupRootEntry = document.getElementById("signup-form-root");
const productRootEntry = document.getElementById("product-form-root");

if (givingRootEntry) {
	ReactDOM.render(
		<FormProvider>
			<App rootEntry={givingRootEntry} />
		</FormProvider>,
		givingRootEntry
	);
}

if (signupRootEntry) {
	ReactDOM.render(
		<FormProvider>
			<App rootEntry={signupRootEntry} />
		</FormProvider>,
		signupRootEntry
	);
}

if (productRootEntry) {
	ReactDOM.render(
		<FormProvider>
			<App rootEntry={productRootEntry} />
		</FormProvider>,
		productRootEntry
	);
}
