import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { cn } from 'utils/bem';

import Placeholder from 'content.blocks/placeholder/placeholder';
import Layout from 'template.blocks/layout/layout';

import './errorBoundary.css';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    const errorBoundary = cn('error-boundary');
    const layoutProps = {
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

ErrorBoundary.propTypes = {
  children: PropTypes.node,
  history: PropTypes.object,
};

export default withRouter(ErrorBoundary);
