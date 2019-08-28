import "./vendors";
import "core-js/stable";

import React from "react";
import * as ReactDOM from "react-dom";

import App from "./Components/App";

import FormConfigProvider from "./Components/Contexts/FormConfigProvider";

const clubGivingRootEntry = document.getElementById("club-form-root");
const givingRootEntry = document.getElementById("giving-form-root");
const signupRootEntry = document.getElementById("signup-form-root");
const productRootEntry = document.getElementById("product-form-root");

if (clubGivingRootEntry) {
	ReactDOM.render(
		<FormConfigProvider>
			<App rootEntry={clubGivingRootEntry} formType="club" />
		</FormConfigProvider>,
		clubGivingRootEntry
	);
}

if (givingRootEntry) {
	ReactDOM.render(
		<FormConfigProvider>
			<App rootEntry={givingRootEntry} formType="giving" />
		</FormConfigProvider>,
		givingRootEntry
	);
}

if (signupRootEntry) {
	ReactDOM.render(
		<FormConfigProvider>
			<App rootEntry={signupRootEntry} formType="signup" />
		</FormConfigProvider>,
		signupRootEntry
	);
}

if (productRootEntry) {
	ReactDOM.render(
		<FormConfigProvider>
			<App rootEntry={productRootEntry} formType="product" />
		</FormConfigProvider>,
		productRootEntry
	);
}
