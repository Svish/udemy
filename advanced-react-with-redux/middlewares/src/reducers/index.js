import { combineReducers } from 'redux';
import comments from 'reducers/comments';
import auth from 'reducers/auth';

export default combineReducers({
  auth,
  comments,
});
