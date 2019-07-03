import React, { useContext } from "react";

import { FormConfigContext } from "../Contexts/FormConfigProvider";
import GivingFormProvider from "../Contexts/GivingFormProvider";
import GivingForm from "./GivingForm";
import ProductForm from "./ProductForm";
import SignUpForm from "./SignUpForm";

const FormRouter = props => {
	const { formConfig } = useContext(FormConfigContext);
	const { type } = formConfig;
	switch (type) {
		case "giving":
			return (
				<GivingFormProvider>
					<GivingForm {...props} {...formConfig} />
				</GivingFormProvider>
			);
			break;
		case "product":
			return <ProductForm {...props} {...formConfig} />;
			break;
		case "email":
			return <SignUpForm {...props} {...formConfig} />;
			break;
		default:
			console.error({ type, formConfig, props });
			alert(
				"There was an internal error loading this form. Please check back later or call us at 1-800-759-0700"
			);
			return null;
			break;
	}
};

export default FormRouter;
