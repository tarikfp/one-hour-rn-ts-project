/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/state-in-constructor */
import * as React from "react";
import FallbackScreen from "../fallback/FallbackScreen";

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(
    error: Error /* errorInfo: React.ErrorInfo */,
  ): void {}

  private resetState = async (): Promise<void> => {
    this.setState({ hasError: false });
  };

  public render(): React.ReactNode {
    if (this.state.hasError) {
      return <FallbackScreen reset={this.resetState} />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
