import React, { Component } from "react";
import { callApi } from "../../helpers/fetch-helpers";

export const FormConfigContext = React.createContext();

const reducer = (state, action) => {
	const { type,  status, formConfig } = action
	switch (type) {
		case "INIT_FORM_STATE":
			return {...state, status, formConfig }
			break;
		case "LOAD_ERROR":
			return {...state, status }
			break;
		case "SUBMIT_FORM":
			return {...state, submitted: true }
			break;
		case "GO_BACK":
			return {...state, submitted: false, confirmed: false }
		case "CONFIRMED":
			return {...state, confirmed: true }
		default:
			return {...state}
	}
}

class FormConfigProvider extends Component {
	state = {
		status: "initial",
		formConfig: {},
		submitted: false,
		confirmed: false,
		getConfiguration: async ({rootEntry, formType}) => {
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

				const { configurations } = initialState

				const formConfig = Array.isArray(configurations) ? configurations.filter(config => config.formType == formType)[0] : {}

				if (formConfig.mode === "production") {
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

				if (Object.keys(formConfig).length) {
					this.setState(state=> reducer(state, {type: "INIT_FORM_STATE", formConfig, status: "loaded" }));
				} else {
					throw new Error(`Unable to Load Configuration for ${formType}`)
				}
			} catch (err) {
				this.setState(state=> reducer(state, {type: "LOAD_ERROR", status: "error" }), () => {
					console.error(err);
					alert(
						"There was an internal error loading this form. Please check back later or call us at 1-800-759-0700"
					);
				});
			}
		},
		submitForm: action => this.setState(state=> reducer(state,action)),
		setConfirmed: action => this.setState(state=> reducer(state,action)),
		goBack: action => this.setState(state=> reducer(state,action))
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
