import React, { useContext } from "react";

import { FormConfigContext } from "../Contexts/FormConfigProvider";
import GivingFormProvider from "../Contexts/GivingFormProvider";
import ProductFormProvider from "../Contexts/ProductFormProvider";
import SignUpFormProvider from "../Contexts/SignUpFormProvider";
import GivingForm from "./GivingForm";
import ProductForm from "./ProductForm";
import SignUpForm from "./SignUpForm";

const FormRouter = props => {
	const { formConfig } = useContext(FormConfigContext);
	const { formType } = formConfig;
	switch (formType) {
		case "giving":
			return (
				<GivingFormProvider>
					<GivingForm {...props} {...formConfig} />
				</GivingFormProvider>
			);
			break;
		case "product":
			return (
				<ProductFormProvider>
					<ProductForm {...props} {...formConfig} />
				</ProductFormProvider>
			);
			break;
		case "signup":
			return (
				<SignUpFormProvider>
					<SignUpForm {...props} {...formConfig} />
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
