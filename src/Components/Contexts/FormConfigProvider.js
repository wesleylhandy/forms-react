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
		case "SET_CSS_CONFIG":
			return { ...state, cssConfig: action.values };
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
			let initialState = {}, initialStyle = {}, cssConfig = {}, formConfig = {};
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
					[initialState, initialStyle] = await Promise.all([callApi(`${proxyUri}/config/form-config.json`, {
						method: "GET",
					}), callApi(`${proxyUri}/config/css-config.json`, {
						method: "GET",
					})])
				}
				let configurations;
				configurations = initialState.configurations

				formConfig = Array.isArray(configurations)
					? configurations.filter(config => config.formType == formType)[0]
					: initialState;

				configurations = initialStyle.configurations;
				cssConfig = Array.isArray(configurations) ? configurations.filter(config => config.formType == formType)[0].cssConfig : initialStyle

				if (formConfig.mode === "production") {
					if (window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
						window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function() {};
						if (
							(
								window.__REACT_DEVTOOLS_GLOBAL_HOOK__.renderers instanceof Map && 
								window.__REACT_DEVTOOLS_GLOBAL_HOOK__.renderers.size
							) || 
								Object.keys(window.__REACT_DEVTOOLS_GLOBAL_HOOK__.renderers).length
						) {
							window.__REACT_DEVTOOLS_GLOBAL_HOOK__.renderers = {};
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
		getCssConfig: type => {
			const config = Object.entries(this.state.cssConfig).reduce((obj, [key, value]) => {
				if (key.includes(type)) {
					obj[key] = value
				}
				return obj
			}, {})
			return config
		},
		setCssConfig: action => this.setState(state => reducer(state, action)),
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
