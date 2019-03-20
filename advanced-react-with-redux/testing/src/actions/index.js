import axios from 'axios';

import { NEW_COMMENT, FETCH_COMMENTS } from 'actions/types';

export const newComment = comment => {
  return { type: NEW_COMMENT, payload: comment };
};

export const fetchComments = () => {
  const promise = axios.get('https://jsonplaceholder.typicode.com/comments');

  return { type: FETCH_COMMENTS, payload: promise };
};
