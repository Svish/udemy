import { takeEvery, select, call, put } from 'redux-saga/effects';
import * as types from '../actions/types';
import { setImages, setImagesError } from '../actions';
import { fetchImages } from '../api/unsplash';

export const getPage = state => state.nextPage;

export function* handleImagesLoad() {
  try {
    const page = yield select(getPage);
    const images = yield call(fetchImages, page);
    yield put(setImages(images));
  } catch (error) {
    yield put(setImagesError(error.toString()));
  }
}

export default function* watchImagesLoad() {
  yield takeEvery(types.IMAGES_LOAD, handleImagesLoad);
}
