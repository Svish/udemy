import axios from 'axios';

const ACCESS_KEY =
  '5f02fd3ac62ebd7f5e3df2dd24bb7b71fdc50198ad6f86da3f303b21e57d51a2';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${ACCESS_KEY}`,
  },
});
