import React from 'react';
import { renderToString } from 'react-dom/server';

import { Provider } from 'react-redux';
import serialize from 'serialize-javascript';

import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from '../client/routes';

// NOTE: https://hackernoon.com/whats-new-with-server-side-rendering-in-react-16-9b0d78585d67#ee91

export default (req, store, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        {renderRoutes(routes)}
      </StaticRouter>
    </Provider>
  );

  const state = serialize(store.getState());

  return `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" integrity="sha256-OweaP/Ic6rsV+lysfyS4h+LM6sRwuO3euTYfr6M124g=" crossorigin="anonymous" />
  </head>
  <body>
    <div id="root">${content}</div>
    <script>
      window.INITIAL_STATE = ${state};
    </script>
    <script src="/bundle.js"></script>
  </body>
</html>
  `;
};
