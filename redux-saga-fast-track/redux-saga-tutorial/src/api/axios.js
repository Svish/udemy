import axios from 'axios';

export default axios.create({
  withCredentials: true,
  baseURL: 'http://rem-rest-api.herokuapp.com/api',
});
