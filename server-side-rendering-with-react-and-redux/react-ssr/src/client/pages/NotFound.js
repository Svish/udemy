import React from 'react';

const NotFound = ({ staticContext = {} }) => {
  staticContext.status = 404;
  return (
    <div className="center-align">
      <h2>404 Not Found</h2>
    </div>
  );
};

export default { component: NotFound };
