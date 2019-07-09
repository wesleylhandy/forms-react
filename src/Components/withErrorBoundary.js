import React, {Component} from 'react'

const withErrorBoundary = Component => class extends Component {
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
    console.error(error)
    console.error(info.componentStack)
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return <Component {...this.props} /> 
  }
}

export default withErrorBoundary