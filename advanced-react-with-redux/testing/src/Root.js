import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import reducers from 'reducers';

export default props => {
  const store = createStore(reducers, {}, devToolsEnhancer());
  return <Provider store={store}>{props.children}</Provider>;
};
