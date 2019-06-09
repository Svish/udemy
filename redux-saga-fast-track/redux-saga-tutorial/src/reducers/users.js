import { Types } from '../actions/users';

const INITIAL_STATE = {
  items: [],
  errorMessage: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.GET_USERS_SUCCESS:
      return { ...state, items: action.payload.items };
    case Types.USERS_ERROR:
      return { ...state, errorMessage: action.payload.errorMessage };
    default:
      return state;
  }
};
