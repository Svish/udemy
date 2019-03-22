import ReduxThunk from 'redux-thunk';
import { createStore as createReduxStore, applyMiddleware } from 'redux';

import reducers from './reducers';

const middlewares = [ReduxThunk];

export default (initialState = {}) =>
  createReduxStore(reducers, initialState, applyMiddleware(...middlewares));
