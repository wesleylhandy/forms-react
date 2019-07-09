import React, { useContext, Suspense, lazy } from "react";

import { FormConfigContext } from "../Contexts/FormConfigProvider";
import GivingFormProvider from "../Contexts/GivingFormProvider";
import ProductFormProvider from "../Contexts/ProductFormProvider";
import SignUpFormProvider from "../Contexts/SignUpFormProvider";
const GivingForm = lazy(() => import("./GivingForm"));
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
	const { formType } = formConfig;
	switch (formType) {
		case "giving":
			return (
				<GivingFormProvider>
					<Suspense fallback={<Spinner />}>
						<GivingForm {...props} {...formConfig} submitted={submitted} />
						<PaymentForm submitted={submitted} />
						<GivingSuccessMessage
							confirmed={confirmed}
							successMessage={formConfig.successMessage}
						/>
					</Suspense>
				</GivingFormProvider>
			);
			break;
		case "product":
			return (
				<ProductFormProvider>
					<Suspense fallback={<Spinner />}>
						<ProductForm {...props} {...formConfig} />
					</Suspense>
				</ProductFormProvider>
			);
			break;
		case "signup":
			return (
				<SignUpFormProvider>
					<Suspense fallback={<Spinner />}>
						<SignUpForm {...props} {...formConfig} />
						<SignUpSuccessMessage
							submitted={submitted}
							successMessage={formConfig.successMessage}
						/>
					</Suspense>
				</SignUpFormProvider>
			);
			break;
		default:
			console.error({ formType, formConfig, props });
			alert(
				"There was an internal error loading this form. Please check back later or call us at 1-800-759-0700"
			);
			return null;
			break;
	}
};

export default FormRouter;
