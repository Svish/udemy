import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducers from './reducers';

const initialState = {
  auth: { authenticated: localStorage.getItem('token') },
};

export default createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);
