import axios from 'axios';
import { FETCH_AUTH_USER } from './types';

export const fetchAuthUser = () => async dispatch => {
  const { data } = await axios.get('/api/users/current');

  dispatch({ type: FETCH_AUTH_USER, payload: data });
};

export const newPayment = token => async dispatch => {
  const { data } = await axios.post('/api/payments', token);

  dispatch({ type: FETCH_AUTH_USER, payload: data });
};
