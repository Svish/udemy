import { combineReducers } from 'redux';
import error from './error';
import images from './images';
import isLoading from './isLoading';
import nextPage from './nextPage';
import imageStats from './imageStats';

export default combineReducers({
  error,
  images,
  imageStats,
  nextPage,
  isLoading,
});
