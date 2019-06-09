import { all } from 'redux-saga/effects';

import UserSagas from './users';

export default function* rootSaga() {
  yield all([...UserSagas]);
}
