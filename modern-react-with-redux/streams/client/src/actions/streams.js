import streams from '../api/streams';
import history from '../history';

import {
  FETCH_STREAMS,
  FETCH_STREAM,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
} from './types';

export const fetchStreams = () => async dispatch => {
  const response = await streams.get('/streams');

  dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const fetchStream = id => async dispatch => {
  const response = await streams.get(`/streams/${id}`);

  dispatch({ type: FETCH_STREAM, payload: response.data });
};

export const createStream = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const { data } = await streams.post('/streams', { ...formValues, userId });

  dispatch({ type: CREATE_STREAM, payload: data });

  history.push(`/streams/${data.id}`);
};

export const editStream = (id, stream) => async dispatch => {
  const { data } = await streams.patch(`/streams/${id}`, stream);

  dispatch({ type: EDIT_STREAM, payload: data });

  history.push(`/streams/${data.id}`);
};

export const deleteStream = id => async dispatch => {
  await streams.delete(`/streams/${id}`);

  dispatch({ type: DELETE_STREAM, payload: id });

  history.push(`/streams`);
};
