import * as types from '../actions/types';

export default (state = false, action) => {
  switch (action.type) {
    case types.IMAGES_LOAD:
      return true;

    case types.IMAGES_LOAD_SUCCESS:
    case types.IMAGES_LOAD_FAIL:
      return false;

    default:
      return state;
  }
};
