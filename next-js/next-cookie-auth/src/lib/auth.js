import axios from 'axios';

axios.defaults.withCredentials = true;

export const loginUser = async (email, password) => {
  const { data } = await axios.post('/api/login', { email, password });
  if (typeof window !== 'undefined') {
    window[WINDOW_USER_KEY] = data || {};
  }
};

export const getUserProfile = async () => {
  const { data } = await axios.get('/api/profile');
  return data;
};

export const getServerSideToken = (req = {}) => {
  const { signedCookies = {} } = req;

  // ????

  return !signedCookies ? {} : { user: signedCookies.token };
};

const WINDOW_USER_KEY = '__USER__';

export const getUserScript = user => {
  return `${WINDOW_USER_KEY} = ${JSON.stringify(user)}`;
};
