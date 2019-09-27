/* eslint-disable no-console */
import { takeLatest, call, put } from 'redux-saga/effects';
import * as actions from './actionCreators';
import * as actionTypes from './actionTypes';
import * as uiActions from '../UI/actionCreators';
import { user as userApi } from '../../api';
import { history } from '../index';

export function* login({ payload: { user } }) {
  try {
    yield put(uiActions.setLoading(true));
    const userLogged = yield call(userApi.userLogin, user);
    yield put(actions.setUser(userLogged));
    history.push('/home');
  } catch (error) {
    console.error(error);
  }
  yield put(uiActions.setLoading(false));
}

export function* watchLogin() {
  yield takeLatest(actionTypes.LOGIN, login);
}
