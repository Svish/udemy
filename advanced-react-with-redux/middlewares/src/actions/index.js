import axios from 'axios';

import * as types from 'actions/types';

export const newComment = comment => {
  return { type: types.NEW_COMMENT, payload: comment };
};

export const fetchComments = () => {
  const promise = axios.get('https://jsonplaceholder.typicode.com/comments');

  return { type: types.FETCH_COMMENTS, payload: promise };
};

export const changeAuth = isLoggedIn => {
  return { type: types.CHANGE_AUTH, payload: isLoggedIn };
};
