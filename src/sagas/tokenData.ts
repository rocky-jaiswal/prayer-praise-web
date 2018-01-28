import { call, put, select, takeLatest } from 'redux-saga/effects';

import {
  tokenLoaded,
  tokenLoadError
} from '../containers/App/actions';
import { FETCH_TOKEN } from '../containers/App/constants';

import AppAPI from '../api';

export function* createToken() {
  const state = yield select();
  const accessToken = state.app.accessToken;

  try {
    const result = yield call(AppAPI.createToken, accessToken);
    yield put(tokenLoaded(result.data.token));
  } catch (err) {
    // tslint:disable-next-line:no-console
    console.error(err);
    yield put(tokenLoadError());
  }
}

export function* tokenData() {
  yield takeLatest(FETCH_TOKEN, createToken);
}

export default [
  tokenData
];
