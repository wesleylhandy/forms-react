import React, { Component } from "react";
import { FormConfigContext } from "./Contexts/FormConfigProvider";
import FormRouter from "./Forms/FormRouter";
import { LiveAnnouncer } from 'react-aria-live';

import Wrapper from "./StyledComponents/Wrapper";
import Spinner from "./StyledComponents/Spinner";

function handleUnload(e) {
	e.returnValue =
		"Are you sure you want to go back?\n You may lose all your changes to this page.";
	return "Are you sure you want to go back?\n You may lose all your changes to this page.";
}

class App extends Component {
	componentDidMount() {
		window.addEventListener("beforeunload", handleUnload);
		const { rootEntry, formType } = this.props;
		this.context.getConfiguration({ rootEntry, formType });
	}

	componentWillUnmount() {
		window.removeEventListener("beforeunload", handleUnload);
	}

	render() {
		const { status, confirmed } = this.context;
		if (confirmed) {
			window.removeEventListener("beforeunload", handleUnload);
		}
		return (
			<LiveAnnouncer>
				<Wrapper className="wrapper">
					{status !== "loaded" ? <Spinner /> : <FormRouter />}
				</Wrapper>
			</LiveAnnouncer>
		);
	}
}

App.contextType = FormConfigContext;

export default App;
