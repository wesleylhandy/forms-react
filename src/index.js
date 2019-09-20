import "./vendors";
import "core-js/stable";

import React from "react";
import * as ReactDOM from "react-dom";

// Top-Level Container of the Application
import App from "./Components/App";

// Initialize Provider/Context for Top-Level
import FormConfigProvider from "./Components/Contexts/FormConfigProvider";

// currently only supports one form type at a time on a page
// this could be changed by using querySelectorAll, classes, and then looping through each to render multiple configured forms
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
