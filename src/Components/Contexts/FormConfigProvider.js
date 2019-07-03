import React, { Component } from "react";
import { callApi } from "../../helpers/fetch-helpers";

export const FormConfigContext = React.createContext();

class FormConfigProvider extends Component {
	state = {
		status: "initial",
		formConfig: {},
		getConfiguration: async rootEntry => {
			let initialState;
			try {
				const generator = rootEntry.dataset.environment
					? rootEntry.dataset.environment.toLowerCase()
					: null;
				const formName = rootEntry.dataset.formName;
				const proxyUri = rootEntry.dataset.rest;
				const isDrupal = generator && generator.includes("drupal");
				if (isDrupal) {
					initialState = rootEntry.dataset.initialState;
				} else {
					initialState = await callApi(
						"http://10.100.43.42:8080/config/form-config.json",
						{ method: "GET" }
					);
				}

				if (initialState.mode === "production") {
					if (window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
						window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function() {};
						if (
							Object.keys(window.__REACT_DEVTOOLS_GLOBAL_HOOK__._renderers)
								.length
						) {
							window.__REACT_DEVTOOLS_GLOBAL_HOOK__._renderers = {};
						}
					}
				}
				this.setState({ formConfig: initialState, status: "loaded" });
			} catch (err) {
				this.setState({ status: "error" }, () => {
					console.error(err);
					alert(
						"There was an internal error loading this form. Please check back later or call us at 1-800-759-0700"
					);
				});
			}
		},
	};
	render() {
		const {
			state,
			props: { children },
		} = this;
		return (
			<FormConfigContext.Provider value={state}>{children}</FormConfigContext.Provider>
		);
	}
}

export default FormConfigProvider;
