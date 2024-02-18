import React, { ReactNode } from "react";
import "styles/errorHandling.scss";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-container">
          <h1 className="error-message">
            Something went wrong. <br />
            Let us know if the problem persists
          </h1>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
