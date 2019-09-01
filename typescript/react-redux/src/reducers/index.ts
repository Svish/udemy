import { combineReducers } from 'redux';

import { Todo } from '../actions';

import todo from './todos';

export interface RootState {
  todo: Todo[];
}

export default combineReducers<RootState>({
  todo,
});
