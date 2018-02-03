import { call, put, select, takeLatest } from 'redux-saga/effects';

import {
  updateMessageFailed,
  updateMessageInProgress,
  updateMessageSuccessful
} from '../containers/Me/actions';
import { UPDATE_MESSAGE } from '../containers/Me/constants';

import AppAPI from '../api';

function* updateMessage() {
  try {
    yield put(updateMessageInProgress());

    const state        = yield select();

    yield call(AppAPI.updateMessage, state.myData.messageForEdit);
    yield put(updateMessageSuccessful());
  } catch (err) {
    // tslint:disable-next-line:no-console
    console.error(err);
    yield put(updateMessageFailed());
  }
}

export function* updateMessageWatcher() {
  yield takeLatest(UPDATE_MESSAGE, updateMessage);
}
