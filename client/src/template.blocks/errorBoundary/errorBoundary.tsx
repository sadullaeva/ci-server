import React, { Component, ErrorInfo } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { cn } from 'utils/bem';
import { MemoryHistory } from 'history';

import Placeholder from 'content.blocks/placeholder/placeholder';
import Layout, { LayoutProps } from 'template.blocks/layout/layout';

import './errorBoundary.css';

export interface ErrorBoundaryProps {
  children?: React.ReactNode;
  history: MemoryHistory;
}

export interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<
  ErrorBoundaryProps & RouteComponentProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps & RouteComponentProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    const errorBoundary = cn('error-boundary');
    const layoutProps: LayoutProps = {
      className: errorBoundary(),
      headerProps: {
        type: 'secondary',
        heading: 'School CI server',
      },
    };
    const placeholderProps = {
      children: 'Sorry, something went wrong',
      action: {
        content: 'Go to main page',
        onClick: () => {
          this.setState({ hasError: false });
          this.props.history.push('/');
        },
      },
    };
    return this.state.hasError ? (
      <Layout {...layoutProps}>
        <Placeholder {...placeholderProps} />
      </Layout>
    ) : (
      <>{this.props.children}</>
    );
  }
}

export default withRouter(ErrorBoundary);
