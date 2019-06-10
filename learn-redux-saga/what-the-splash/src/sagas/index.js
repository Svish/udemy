import { all, call } from 'redux-saga/effects';

import images from './images';
import imageStats from './imageStats';

export default function* rootSaga() {
  yield all([call(images), call(imageStats)]);
}
