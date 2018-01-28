import { call, put, select, takeLatest } from 'redux-saga/effects';

import { SUBMIT_MESSAGE } from '../containers/Praise/constants';

import {
  submitMessageFailed,
  submitMessageInProgress,
  submitMessageSuccessful
} from '../containers/Praise/actions';

import API from '../api';

export function* submitMessage() {
  try {
    yield put(submitMessageInProgress());

    const state = yield select();
    const messageType   = state.messages.messageType;
    const messageText   = state.messages.messageText;
    const sharedStatus  = state.messages.sharedStatus;

    yield call(API.submitMessage, { messageType, messageText, sharedStatus });
    yield put(submitMessageSuccessful());
  } catch (err) {
    // tslint:disable-next-line:no-console
    console.error(err);
    yield put(submitMessageFailed());
  }
}

export function* messages() {
  yield takeLatest(SUBMIT_MESSAGE, submitMessage);
}

// Bootstrap sagas
export default [
  messages
];
