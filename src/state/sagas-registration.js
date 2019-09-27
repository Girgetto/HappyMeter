import { all, fork } from 'redux-saga/effects';
import {
  watchLogin,
} from './User/sagas';

export default function* root() {
  yield all([
    fork(watchLogin),
  ]);
}
