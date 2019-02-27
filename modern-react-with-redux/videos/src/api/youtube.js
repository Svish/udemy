import axios from 'axios';

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

if (!API_KEY) throw new Error('Missing YouTube API key in .env');

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    key: API_KEY,
    part: 'snippet',
    type: 'video',
    maxResults: 5,
  },
});
