import axios from 'axios';

const ACCESS_KEY = process.env.REACT_APP_UNSPLASH_API_KEY;

if (!ACCESS_KEY) throw new Error('Missing Unsplash access key in .env');

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${ACCESS_KEY}`,
  },
});
