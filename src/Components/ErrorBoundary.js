import React, { Component } from "react";

import Spinner from "./StyledComponents/Spinner";

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	static get name() {
		return Component.name;
	}

	static getDerivedStateFromError(error) {
		// Update state so the next render will show the fallback UI.
		return { hasError: true };
	}

	componentDidCatch(error, info) {
		// You can also log the error to an error reporting service
		console.error("Error Boundary Notification");
		console.error(error);
		console.error(info.componentStack);
		try {
			window.omTrackDebug(
				window.location.href + " - React Giving Form",
				JSON.stringify({ error, info })
			);
		} catch (err) {
			console.error("Error Tracking Error");
			console.error(err);
		}
		alert(
			"There was an internal error loading this form. Please check back later or call us at 1-800-759-0700"
		);
	}

	render() {
		if (this.state.hasError) {
			// You can render any custom fallback UI
			return <Spinner />;
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
