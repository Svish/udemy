import axios from 'axios';
import { FETCH_AUTH_USER, FETCH_SURVEYS } from './types';

export const fetchAuthUser = () => async dispatch => {
  const { data } = await axios.get('/api/users/current');

  dispatch({ type: FETCH_AUTH_USER, payload: data });
};

export const newPayment = token => async dispatch => {
  const { data } = await axios.post('/api/payments', token);

  dispatch({ type: FETCH_AUTH_USER, payload: data });
};

export const newSurvey = (survey, history) => async dispatch => {
  const { data } = await axios.post('/api/surveys', survey);

  dispatch({ type: FETCH_AUTH_USER, payload: data });

  history.push('/surveys');
};

export const fetchSurveys = () => async dispatch => {
  const { data } = await axios.get('/api/surveys');

  dispatch({
    type: FETCH_SURVEYS,
    payload: data.map(x => ({ ...x, id: x._id })),
  });
};
