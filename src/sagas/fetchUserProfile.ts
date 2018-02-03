import { call, put, takeLatest } from 'redux-saga/effects';

import {
  userProfileLoaded,
  userProfileLoadError
} from '../containers/App/actions';

import { FETCH_USER_PROFILE } from '../containers/App/constants';

import AppAPI from '../api';

function* fetchUserProfile() {
  try {
    const result = yield call(AppAPI.fetchUserProfile);
    yield put(userProfileLoaded(result.data));
  } catch (err) {
    // tslint:disable-next-line:no-console
    console.error(err);
    yield put(userProfileLoadError());
  }
}

export function* fetchUserProfileWatcher() {
  yield takeLatest(FETCH_USER_PROFILE, fetchUserProfile);
}
