// import { LOCATION_CHANGE } from 'react-router-redux';
// import { call, cancel, put, select, take, takeLatest } from 'redux-saga/effects';
import { call, put, takeLatest } from 'redux-saga/effects';

import {
  userProfileLoaded,
  userProfileLoadError
} from '../containers/App/actions';

import { FETCH_USER_PROFILE } from '../containers/App/constants';

import AppAPI from '../api';

export function* getUserProfile() {
  try {
    const result = yield call(AppAPI.fetchUserProfile);
    yield put(userProfileLoaded(result.data));
  } catch (err) {
    // tslint:disable-next-line:no-console
    console.error(err);
    yield put(userProfileLoadError());
  }
}

export function* userProfile() {
  yield takeLatest(FETCH_USER_PROFILE, getUserProfile);

  // Suspend execution until location changes
  // yield take(LOCATION_CHANGE);
  // yield cancel(watcher);
}

export default userProfile;
