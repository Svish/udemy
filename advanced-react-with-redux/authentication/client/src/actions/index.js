import axios from 'axios';

import { AUTH_USER, AUTH_ERROR } from './types';

export const signUp = ({ email, password }, callback) => async dispatch => {
  try {
    const response = await axios.post('http://localhost:3090/sign-up', {
      email,
      password,
    });

    const { token } = response.data;

    dispatch({ type: AUTH_USER, payload: token });
    localStorage.setItem('token', token);
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: 'Email in use' });
  }
};

export const signIn = ({ email, password }, callback) => async dispatch => {
  try {
    const response = await axios.post('http://localhost:3090/sign-in', {
      email,
      password,
    });

    const { token } = response.data;

    dispatch({ type: AUTH_USER, payload: token });
    localStorage.setItem('token', token);
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: 'Invalid credentials' });
  }
};

export const signOut = () => {
  localStorage.removeItem('token');

  return {
    type: AUTH_USER,
    payload: false,
  };
};
