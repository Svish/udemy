import axios from 'axios';

const API_KEY = 'AIzaSyDgO7XosMuAS2Ik5xYU7O43bisKE16rpKM';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    key: API_KEY,
    part: 'snippet',
    type: 'video',
    maxResults: 5,
  },
});
