import { NEW_COMMENT, FETCH_COMMENTS } from 'actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case NEW_COMMENT:
      return [...state, action.payload, {}];

    case FETCH_COMMENTS:
      const comments = action.payload.data.map(c => c.name);
      return [...state, ...comments];

    default:
      return state;
  }
};
