import React, { Component } from "react";
import { FormConfigContext } from "./Contexts/FormConfigProvider";
import FormRouter from "./Forms/FormRouter";
import { LiveAnnouncer } from "react-aria-live"; // for posting a11y messages for screen reader users

import Wrapper from "./StyledComponents/Wrapper";
import Spinner from "./StyledComponents/Spinner";

/**
 * Intercepts onbeforeunload event and sets a unique alert warning users about losing information if they leave the page
 * @param {Event} e - onbeforeunload events from window object
 */
const handleUnload = e => {
	const returnValue = "Are you sure you want to go back?\n You may lose all your changes to this page.";
	e.returnValue = returnValue;
	return returnValue;
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

App.contextType = FormConfigContext; // subscribe to FormConfigProvider at top level

export default App;
