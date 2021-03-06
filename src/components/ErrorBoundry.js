import React from "react";

class ErrorBoundry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError === true) {
      return <h1>Ooooops.That is no good</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundry;
