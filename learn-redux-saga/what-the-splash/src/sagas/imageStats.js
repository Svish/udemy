import { takeEvery, fork, call, put } from 'redux-saga/effects';
import * as types from '../actions/types';
import { loadImageStats, setImageStats, setImageStatsError } from '../actions';
import { fetchImageStats } from '../api/unsplash';

export function* handleImageStatsLoad(id) {
  for (let n = 0; n < 3; n++) {
    try {
      yield put(loadImageStats(id));
      const stats = yield call(fetchImageStats, id);
      yield put(setImageStats(id, stats.downloads.total));
      return true;
    } catch (error) {}
  }
  yield put(setImageStatsError(id));
}

export function* handleImagesLoadSuccess({ images }) {
  for (const image of images) {
    yield fork(handleImageStatsLoad, image.id);
  }
}

export default function* watchImagesLoadSuccess() {
  yield takeEvery(types.IMAGES_LOAD_SUCCESS, handleImagesLoadSuccess);
}
