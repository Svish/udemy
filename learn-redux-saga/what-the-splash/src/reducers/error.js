import * as types from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case types.IMAGES_LOAD_FAIL:
      return action.error;

    case types.IMAGES_LOAD:
    case types.IMAGES_LOAD_SUCCESS:
      return null;

    default:
      return state;
  }
};
