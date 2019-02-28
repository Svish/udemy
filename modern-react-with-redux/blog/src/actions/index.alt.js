/**
 * Memoized version of `fetchUser`
 */
import jsonPlaceholder from '../api/jsonPlaceholder';
import { memoize } from 'lodash';

export const fetchUser = id => dispatch => _fetchUser(id, dispatch);
const _fetchUser = memoize(async (id, dispatch) => {
  const { data } = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: 'FETCH_USER', payload: data });
});
