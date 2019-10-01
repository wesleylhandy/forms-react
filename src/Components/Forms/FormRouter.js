import React, { useContext, Suspense, lazy } from "react";
import { Global, css } from "@emotion/core";

import { FormConfigContext } from "../Contexts/FormConfigProvider";
import GivingFormProvider from "../Contexts/GivingFormProvider";
import ProductFormProvider from "../Contexts/ProductFormProvider";
import SignUpFormProvider from "../Contexts/SignUpFormProvider";
import ErrorBoundary from "../ErrorBoundary";
const GivingForm = lazy(() => import("./GivingForm"));
const AskForm = lazy(() => import("./AskForm"));
const ConfirmationForm = lazy(() => import("./ConfirmationForm"));
const PaymentForm = lazy(() => import("./PaymentForm"));
const ProductForm = lazy(() => import("./ProductForm"));
const SignUpForm = lazy(() => import("./SignUpForm"));
const GivingSuccessMessage = lazy(() =>
	import("../SuccessPages/GivingSuccessMessage")
);
const SignUpSuccessMessage = lazy(() =>
	import("../SuccessPages/SignUpSuccessMessage")
);
const ClubSuccessMessage = lazy(() =>
	import("../SuccessPages/ClubSuccessMessage")
);
import Spinner from "../StyledComponents/Spinner";

const FormRouter = props => {
	const { formConfig, submitted, confirmed, getCssConfig } = useContext(
		FormConfigContext
	);
	const {
		formType,
		allowInternational,
		getPhone,
		getHonorific,
		getSuffix,
		getMiddleName,
		getSpouseInfo,
	} = formConfig;

	const {
		formExternalFont = "none",
		formFontFamily = "Arial, sans-serif",
		formFontStyle = "normal",
		formFontWeight = "400",
		formFontSize = "19px",
		formBackgroundColor = "#fff",
		formBorderColor = "transparent",
		formBorderRadius = "0",
		formBorderWidth = "2px",
		formBoxShadow = "0 0 7px 0 rgba(0,0,0,0.07)",
		formMaxWidth = "768px",
		formPadding = "0",
		formMargin = "0",
		formColor = "#333",
	} = getCssConfig("form");
	switch (formType) {
		case "club":
			return (
				<GivingFormProvider>
					<Suspense fallback={<Spinner />}>
						<Global
							styles={css`
								${formExternalFont ? `@import url("${formExternalFont}");` : ""}
								* {
									font-family: ${formFontFamily};
									font-size: ${formFontSize};
									font-weight: ${formFontWeight};
									font-style: ${formFontStyle};
									line-height: unset;
									box-sizing: unset;
								}
								.wrapper {
									background-color: #eceff1;
								}
								a.disabled {
									cursor: not-allowed !important;
									text-decoration: none !important;
									opacity: 0.5 !important;
								}
							`}
						/>
						<ErrorBoundary>
							<AskForm
								{...props}
								{...formConfig}
								formBackgroundColor={formBackgroundColor}
								formBorderColor={formBorderColor}
								formBorderRadius={formBorderRadius}
								formBorderWidth={formBorderWidth}
								formBoxShadow={formBoxShadow}
								formMaxWidth={formMaxWidth}
								formPadding={formPadding}
								formMargin={formMargin}
								formColor={formColor}
							/>
						</ErrorBoundary>
						<ErrorBoundary>
							<ConfirmationForm
								allowInternational={allowInternational}
								getPhone={getPhone}
								getHonorific={getHonorific}
								getSuffix={getSuffix}
								getMiddleName={getMiddleName}
								getSpouseInfo={getSpouseInfo}
								submitted={submitted}
								formBackgroundColor={formBackgroundColor}
								formBorderColor={formBorderColor}
								formBorderRadius={formBorderRadius}
								formBorderWidth={formBorderWidth}
								formBoxShadow={formBoxShadow}
								formMaxWidth={formMaxWidth}
								formPadding={formPadding}
								formMargin={formMargin}
								formColor={formColor}
							/>
						</ErrorBoundary>
						<ErrorBoundary>
							<ClubSuccessMessage
								confirmed={confirmed}
								successMessage={formConfig.successMessage}
								formBackgroundColor={formBackgroundColor}
								formBorderColor={formBorderColor}
								formBorderRadius={formBorderRadius}
								formBorderWidth={formBorderWidth}
								formBoxShadow={formBoxShadow}
								formMaxWidth={formMaxWidth}
								formPadding={formPadding}
								formMargin={formMargin}
								formColor={formColor}
							/>
						</ErrorBoundary>
					</Suspense>
				</GivingFormProvider>
			);
			break;
		case "giving":
			return (
				<GivingFormProvider>
					<Suspense fallback={<Spinner />}>
						<ErrorBoundary>
							<GivingForm
								{...props}
								{...formConfig}
								submitted={submitted}
								formBackgroundColor={formBackgroundColor}
								formBorderColor={formBorderColor}
								formBorderRadius={formBorderRadius}
								formBorderWidth={formBorderWidth}
								formBoxShadow={formBoxShadow}
								formMaxWidth={formMaxWidth}
								formPadding={formPadding}
								formMargin={formMargin}
								formColor={formColor}
							/>
						</ErrorBoundary>
						<ErrorBoundary>
							<PaymentForm
								submitted={submitted}
								formBackgroundColor={formBackgroundColor}
								formBorderColor={formBorderColor}
								formBorderRadius={formBorderRadius}
								formBorderWidth={formBorderWidth}
								formBoxShadow={formBoxShadow}
								formMaxWidth={formMaxWidth}
								formPadding={formPadding}
								formMargin={formMargin}
								formColor={formColor}
							/>
						</ErrorBoundary>
						<ErrorBoundary>
							<GivingSuccessMessage
								confirmed={confirmed}
								successMessage={formConfig.successMessage}
								formBackgroundColor={formBackgroundColor}
								formBorderColor={formBorderColor}
								formBorderRadius={formBorderRadius}
								formBorderWidth={formBorderWidth}
								formBoxShadow={formBoxShadow}
								formMaxWidth={formMaxWidth}
								formPadding={formPadding}
								formMargin={formMargin}
								formColor={formColor}
							/>
						</ErrorBoundary>
					</Suspense>
				</GivingFormProvider>
			);
			break;
		case "product":
			return (
				<ProductFormProvider>
					<Suspense fallback={<Spinner />}>
						<ErrorBoundary>
							<ProductForm
								{...props}
								{...formConfig}
								formBackgroundColor={formBackgroundColor}
								formBorderColor={formBorderColor}
								formBorderRadius={formBorderRadius}
								formBorderWidth={formBorderWidth}
								formBoxShadow={formBoxShadow}
								formMaxWidth={formMaxWidth}
								formPadding={formPadding}
								formMargin={formMargin}
								formColor={formColor}
							/>
						</ErrorBoundary>
					</Suspense>
				</ProductFormProvider>
			);
			break;
		case "signup":
			return (
				<SignUpFormProvider>
					<Suspense fallback={<Spinner />}>
						<ErrorBoundary>
							<SignUpForm
								{...props}
								{...formConfig}
								formBackgroundColor={formBackgroundColor}
								formBorderColor={formBorderColor}
								formBorderRadius={formBorderRadius}
								formBorderWidth={formBorderWidth}
								formBoxShadow={formBoxShadow}
								formMaxWidth={formMaxWidth}
								formPadding={formPadding}
								formMargin={formMargin}
								formColor={formColor}
							/>
						</ErrorBoundary>
						<ErrorBoundary>
							<SignUpSuccessMessage
								submitted={submitted}
								successMessage={formConfig.successMessage}
								formBackgroundColor={formBackgroundColor}
								formBorderColor={formBorderColor}
								formBorderRadius={formBorderRadius}
								formBorderWidth={formBorderWidth}
								formBoxShadow={formBoxShadow}
								formMaxWidth={formMaxWidth}
								formPadding={formPadding}
								formMargin={formMargin}
								formColor={formColor}
							/>
						</ErrorBoundary>
					</Suspense>
				</SignUpFormProvider>
			);
			break;
		default:
			console.error("Form Configuration Error");
			console.error({ formType, formConfig, props });
			try {
				window.omTrackDebug(
					window.location.href + " - React Giving Form",
					JSON.stringify({ formType, formConfig, props })
				);
			} catch (err) {
				console.error("Error Tracking Error");
				console.error(err);
			}
			alert(
				"There was an internal error loading this form. Please check back later or call us at 1-800-759-0700"
			);
			return null;
			break;
	}
};

export default FormRouter;
