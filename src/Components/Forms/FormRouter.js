import React, { useContext, Suspense, lazy } from "react";

import { FormConfigContext } from "../Contexts/FormConfigProvider";
import GivingFormProvider from "../Contexts/GivingFormProvider";
import ProductFormProvider from "../Contexts/ProductFormProvider";
import SignUpFormProvider from "../Contexts/SignUpFormProvider";
import ErrorBoundary from '../ErrorBoundary';
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
import Spinner from "../StyledComponents/Spinner";

const FormRouter = props => {
	const { formConfig, submitted, confirmed } = useContext(FormConfigContext);
	const { 
		formType, 
		allowInternational,
		getPhone,
		getHonorific,
		getSuffix,
		getMiddleName,
		getSpouseInfo, 
	} = formConfig;
	switch (formType) {
		case "club":
			return (
				<GivingFormProvider>
					<Suspense fallback={<Spinner />}>
						<ErrorBoundary>
							<AskForm {...props} {...formConfig} submitted={submitted} />
						</ErrorBoundary>
						<ErrorBoundary>
							<ConfirmationForm 
								allowInternational={allowInternational}
								getPhone={getPhone}
								getHonorific={getHonorific}
								getSuffix={getSuffix}
								getMiddleName={getMiddleName}
								getSpouseInfo={getSpouseInfo}
								submitted={submitted} />
						</ErrorBoundary>
						<ErrorBoundary>
							<GivingSuccessMessage
								confirmed={confirmed}
								successMessage={formConfig.successMessage}
							/>
						</ErrorBoundary>
					</Suspense>
				</GivingFormProvider>
			)
			break;
		case "giving":
			return (
				<GivingFormProvider>
					<Suspense fallback={<Spinner />}>
						<ErrorBoundary>
							<GivingForm {...props} {...formConfig} submitted={submitted} />
						</ErrorBoundary>
						<ErrorBoundary>
							<PaymentForm submitted={submitted} />
						</ErrorBoundary>
						<ErrorBoundary>
							<GivingSuccessMessage
								confirmed={confirmed}
								successMessage={formConfig.successMessage}
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
							<ProductForm {...props} {...formConfig} />
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
							<SignUpForm {...props} {...formConfig} />
						</ErrorBoundary>
						<ErrorBoundary>
							<SignUpSuccessMessage
								submitted={submitted}
								successMessage={formConfig.successMessage}
							/>
						</ErrorBoundary>
					</Suspense>
				</SignUpFormProvider>
			);
			break;
		default:
			console.error("Form Configuration Error")
			console.error({ formType, formConfig, props });
			try {
				window.omTrackDebug(window.location.href + " - React Giving Form", JSON.stringify({formType, formConfig, props})) 
			} catch (err) {
				console.error("Error Tracking Error")
				console.error(err)
			}
			alert(
				"There was an internal error loading this form. Please check back later or call us at 1-800-759-0700"
			);
			return null;
			break;
	}
};

export default FormRouter;
