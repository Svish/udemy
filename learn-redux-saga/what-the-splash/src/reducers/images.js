import { IMAGES_LOAD_SUCCESS } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case IMAGES_LOAD_SUCCESS:
      return [...state, ...action.images];
    default:
      return state;
  }
};
