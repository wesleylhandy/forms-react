import React, { Component } from "react";
import { callApi } from "../../helpers/fetch-helpers";
import getQueryVariable from "../../helpers/get-query-variable";

export const FormConfigContext = React.createContext();

// uses it own reducer to avoid conflicts with other Contexts in use
const reducer = (state, action) => {
	const {
		type,
		status,
		formConfig,
		cssConfig,
		idleWarning,
		expiredWarning,
	} = action;
	switch (type) {
		case "INIT_FORM_STATE":
			return {
				...state,
				status,
				formConfig,
				cssConfig,
				idleWarning,
				expiredWarning,
			};
		case "LOAD_ERROR":
			return { ...state, status };
		case "SUBMIT_FORM":
			return { ...state, submitted: true };
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
		idleWarning: -1,
		expiredWarning: -1,
		expired: false,
		status: "initial",
		formConfig: {},
		cssConfig: {},
		submitted: false,
		confirmed: false,
		clearTimeouts: () => {
			clearTimeout(this.state.idleWarning);
			clearTimeout(this.state.expiredWarning);
		},
		getConfiguration: async ({ rootEntry, formType }) => {
			// TODO: REDUCE INITIALIZATION OF DATA TO A SINGLE API CALL

			let initialState = {},
				initialStyle = {},
				cssConfig = {},
				formConfig = {};
			try {
				const generator = rootEntry.dataset.environment
					? rootEntry.dataset.environment.toLowerCase()
					: null;
				const formName = rootEntry.dataset.formName;
				let proxyUri = rootEntry.dataset.rest;
				const isLocal = generator && generator.includes("local");
				const isDrupal = generator && generator.includes("drupal");
				const isWordpress = generator && generator.includes("wordpress");
				const queryPreset = getQueryVariable("preset");
				const preset = queryPreset ? queryPreset : rootEntry.dataset.preset;
				const headerTitle = rootEntry.dataset.title;
				if (isDrupal) {
					initialState = rootEntry.dataset.initialState;
					initialStyle = rootEntry.dataset.initialStyle;
				} else if (isWordpress) {
					const configUrl = `${proxyUri}cbngiving/v1/${formName}?type=initial_setup`;
					const config = await callApi(configUrl, { method: "GET" }, true);
					initialState = config.initialState;
					initialStyle = config.initialStyle;
					proxyUri = `${proxyUri}cbngiving/v1/${formName}`;
					if (initialState.formType === "signup") {
						proxyUri += `/contacts/${initialState.contactAPI.type}`;
					}
				} else {
					proxyUri = `http://${process.env.DEV_SERVER_IP}:${process.env.DEV_SERVER_PORT}`;
					[initialState, initialStyle] = await Promise.all([
						callApi(
							`${proxyUri}/config/form-config.json`,
							{
								method: "GET",
							},
							true
						),
						callApi(
							`${proxyUri}/config/css-config.json`,
							{
								method: "GET",
							},
							true
						),
					]);
				}
				let configurations;
				configurations = initialState.configurations;

				formConfig = Array.isArray(configurations)
					? configurations.filter(config => config.formType == formType)[0]
					: initialState;

				configurations = initialStyle.configurations;
				cssConfig = Array.isArray(configurations)
					? configurations.filter(config => config.formType == formType)[0]
							.cssConfig
					: initialStyle;

				// Disable React Dev Tools in Production
				try {
					if (formConfig.mode === "production") {
						if (window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
							window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function() {};
							if (
								(window.__REACT_DEVTOOLS_GLOBAL_HOOK__.renderers instanceof
									Map &&
									window.__REACT_DEVTOOLS_GLOBAL_HOOK__.renderers.size) ||
								Object.keys(window.__REACT_DEVTOOLS_GLOBAL_HOOK__.renderers)
									.length
							) {
								window.__REACT_DEVTOOLS_GLOBAL_HOOK__.renderers = {};
							}
						}
					}
				} catch (err) {
					console.error("Unable to Disable React Dev Tools");
					console.error(err);
				}

				if (Object.keys(formConfig).length) {
					formConfig.proxy = isLocal ? `${proxyUri}/${formType}` : proxyUri;
					const idleWarning = setTimeout(
						() => alert("This session will expire in 5 minutes."),
						10 * 60 * 1000
					);
					const expiredWarning = setTimeout(
						() =>
							this.setState({ expired: true }, () =>
								alert(
									"This session has expired. Please refresh this page if you wish to continue."
								)
							),
						15 * 60 * 1000
					);
					if (preset) {
						const { designations = [{ DetailName: "" }] } = formConfig;
						const idx = designations.findIndex(({ DetailName }) =>
							DetailName.includes(preset)
						);
						if (idx > -1) {
							formConfig.preset = preset;
							formConfig.defaultOption = "single";
							formConfig.designatedIndex = idx > -1 ? idx : 0;

							const presetTitle = idx > -1 ? designations[idx].title : "";
							if (presetTitle && headerTitle) {
								formConfig.formHeader.title = headerTitle.replace(
									/(\#\#PRESET\#\#)/gi,
									presetTitle
								);
							}
						}
					}
					this.setState(state =>
						reducer(state, {
							type: "INIT_FORM_STATE",
							formConfig,
							cssConfig,
							status: "loaded",
							idleWarning,
							expiredWarning,
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
			const config = Object.entries(this.state.cssConfig).reduce(
				(obj, [key, value]) => {
					if (key.includes(type)) {
						obj[key] = value;
					}
					return obj;
				},
				{}
			);
			return config;
		},
		getFormConfig: key => {
			return this.state.formConfig[key];
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
