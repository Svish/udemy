import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default ({ status, ...props }) => (
  <Route
    render={({ staticContext = {} }) => {
      staticContext.status = status;
      return <Redirect {...props} />;
    }}
  />
);
