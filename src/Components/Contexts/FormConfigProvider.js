import React, { Component } from "react";
import { callApi } from "../../helpers/fetch-helpers";

export const FormConfigContext = React.createContext();

const reducer = (state, action) => {
	const { type, status, formConfig, cssConfig } = action;
	switch (type) {
		case "INIT_FORM_STATE":
			return { ...state, status, formConfig, cssConfig };
			break;
		case "LOAD_ERROR":
			return { ...state, status };
			break;
		case "SUBMIT_FORM":
			return { ...state, submitted: true };
			break;
		case "GO_BACK":
			return { ...state, submitted: false, confirmed: false };
		case "CONFIRMED":
			return { ...state, confirmed: true };
		default:
			return { ...state };
	}
};

class FormConfigProvider extends Component {
	state = {
		status: "initial",
		formConfig: {},
		cssConfig: {},
		submitted: false,
		confirmed: false,
		getConfiguration: async ({ rootEntry, formType }) => {
			let initialState = {}, cssConfig = {}, formConfig = {};
			try {
				const generator = rootEntry.dataset.environment
					? rootEntry.dataset.environment.toLowerCase()
					: null;
				const formName = rootEntry.dataset.formName;
				let proxyUri = rootEntry.dataset.rest;
				const isLocal = generator && generator.includes("local");
				const isDrupal = generator && generator.includes("drupal");
				const isWordpress = generator && generator.includes("wordpress");
				if (isDrupal) {
					initialState = rootEntry.dataset.initialState;
				} else if (isWordpress) {
					[cssConfig, initialState] = await Promise.all([
						callApi(cssConfigUrl, {method: 'GET'}),
						callApi(formConfigUrl, {method: 'GET'})
					])
					proxyUri = `${proxyUri}cbngiving/v1/${formName}`
				} else {
					proxyUri = `http://${process.env.DEV_SERVER_IP}:${process.env.DEV_SERVER_PORT}`;
					initialState = await callApi(`${proxyUri}/config/form-config.json`, {
						method: "GET",
					});
				}

				const { configurations } = initialState;

				formConfig = Array.isArray(configurations)
					? configurations.filter(config => config.formType == formType)[0]
					: initialState;

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
					formConfig.proxy = isLocal ? `${proxyUri}/${formType}` : proxyUri;
					this.setState(state =>
						reducer(state, {
							type: "INIT_FORM_STATE",
							formConfig,
							cssConfig,
							status: "loaded",
						})
					);
				} else {
					throw new Error(`Unable to Load Configuration for ${formType}`);
				}
			} catch (err) {
				this.setState(
					state => reducer(state, { type: "LOAD_ERROR", status: "error" }),
					() => {
						console.error(err);
						alert(
							"There was an internal error loading this form. Please check back later or call us at 1-800-759-0700"
						);
					}
				);
			}
		},
		submitForm: action => this.setState(state => reducer(state, action)),
		setConfirmed: action => this.setState(state => reducer(state, action)),
		goBack: action => this.setState(state => reducer(state, action)),
	};
	render() {
		const {
			state,
			props: { children },
		} = this;
		return (
			<FormConfigContext.Provider value={state}>
				{children}
			</FormConfigContext.Provider>
		);
	}
}

export default FormConfigProvider;
