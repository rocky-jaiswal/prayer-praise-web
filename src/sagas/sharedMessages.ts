import { call, put, takeLatest } from 'redux-saga/effects';

import {
  fetchSharedMessagesFailed,
  fetchSharedMessagesInProgress,
  fetchSharedMessagesSuccessful
} from '../containers/Root/actions';
import { FETCH_SHARED_MESSAGES } from '../containers/Root/constants';

import AppAPI from '../api';

export function* getSharedMessages() {
  try {
    yield put(fetchSharedMessagesInProgress());
    const result = yield call(AppAPI.fetchSharedMessages);
    yield put(fetchSharedMessagesSuccessful(result.data));
  } catch (err) {
    // tslint:disable-next-line:no-console
    console.error(err);
    yield put(fetchSharedMessagesFailed());
  }
}

export function* sharedMessages() {
  yield takeLatest(FETCH_SHARED_MESSAGES, getSharedMessages);
}
