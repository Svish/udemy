import { NEW_COMMENT } from 'actions/types';

export const newComment = comment => {
  return { type: NEW_COMMENT, payload: comment };
};
