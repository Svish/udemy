import React from 'react';
import { connect } from 'react-redux';

import Redirect from '../Redirect';

export default ChildComponent => {
  class RequireAuth extends React.Component {
    render() {
      const { auth, ...props } = this.props;

      switch (auth) {
        case null:
          return <div>Loading...</div>;

        case false:
          return <Redirect status={302} to="/" />;

        default:
          return <ChildComponent {...props} />;
      }
    }
  }

  const mapStateToProps = ({ auth }) => ({ auth });

  return connect(mapStateToProps)(RequireAuth);
};
