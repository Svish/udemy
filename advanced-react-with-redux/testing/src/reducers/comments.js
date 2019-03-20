import { NEW_COMMENT } from 'actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case NEW_COMMENT:
      return [...state, action.payload];
    default:
      return state;
  }
};
