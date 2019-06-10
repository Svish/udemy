import * as types from './types';

export const loadImages = () => ({
  type: types.IMAGES_LOAD,
});

export const setImages = images => ({
  type: types.IMAGES_LOAD_SUCCESS,
  images,
});

export const setImagesError = error => ({
  type: types.IMAGES_LOAD_FAIL,
  error,
});

export const loadImageStats = id => ({
  type: types.STATS_LOAD,
  id,
});

export const setImageStats = (id, downloads) => ({
  type: types.STATS_LOAD_SUCCESS,
  id,
  downloads,
});

export const setImageStatsError = id => ({
  type: types.STATS_LOAD_FAIL,
  id,
});
