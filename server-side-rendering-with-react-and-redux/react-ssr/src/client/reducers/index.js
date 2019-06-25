import { combineReducers } from 'redux';

import auth from './auth';
import users from './users';
import admins from './admins';

export default combineReducers({
  auth,
  users,
  admins,
});
