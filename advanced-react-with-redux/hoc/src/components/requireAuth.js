import React from 'react';
import { connect } from 'react-redux';

export default Component => {
  class ComposedComponent extends React.Component {
    componentDidMount() {
      this.shouldNavigateAway();
    }

    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      if (!this.props.auth) {
        this.props.history.push('/');
      }
    }

    render() {
      return <Component {...this.props} />;
    }
  }

  const mapStateToProps = ({ auth }) => ({ auth });

  return connect(mapStateToProps)(ComposedComponent);
};
