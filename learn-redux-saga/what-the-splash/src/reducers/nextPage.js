import { IMAGES_LOAD_SUCCESS } from '../actions/types';

export default (state = 1, action) => {
  switch (action.type) {
    case IMAGES_LOAD_SUCCESS:
      return state + 1;

    default:
      return state;
  }
};
