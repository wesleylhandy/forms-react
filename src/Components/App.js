import React, { Component } from "react";
import { FormConfigContext } from "./Contexts/FormConfigProvider";
import FormRouter from "./Forms/FormRouter";

import Banner from "./StyledComponents/Banner";
import FormWrapper from "./StyledComponents/FormWrapper";
import Spinner from "./StyledComponents/Spinner";

class App extends Component {
	componentDidMount() {
		const { rootEntry, formType } = this.props
		this.context.getConfiguration({rootEntry, formType});
	}

	render() {
		const { status } = this.context;
		return (
			<FormWrapper className="form-wrapper" id="react-form-top">
				{status !== "loaded" ? <Spinner /> : <FormRouter />}
			</FormWrapper>
		);
	}
}

App.contextType = FormConfigContext;

export default App;
