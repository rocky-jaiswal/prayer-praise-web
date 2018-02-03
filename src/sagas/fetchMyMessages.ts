import { call, put, takeLatest } from 'redux-saga/effects';

import {
  fetchMyMessagesFailed,
  fetchMyMessagesInProgress,
  fetchMyMessagesSuccessful,
} from '../containers/Me/actions';

import {
  logout
} from '../containers/App/actions';

import { FETCH_MY_MESSAGES } from '../containers/Me/constants';

import AppAPI from '../api';

function* fetchMyMessages() {
  try {
    yield put(fetchMyMessagesInProgress());
    const result = yield call(AppAPI.fetchMyMessages);
    yield put(fetchMyMessagesSuccessful(result.data));
  } catch (err) {
    // tslint:disable-next-line:no-console
    console.error(err);
    yield put(fetchMyMessagesFailed());
    yield put(logout());
  }
}

export function* fetchMyMessagesWatcher() {
  yield takeLatest(FETCH_MY_MESSAGES, fetchMyMessages);
}
