import React from 'react';
import { Provider } from 'react-redux';

import createStore from './createStore';

export default ({ children, initialState }) => {
  const store = createStore(initialState);

  return <Provider store={store}>{children}</Provider>;
};
