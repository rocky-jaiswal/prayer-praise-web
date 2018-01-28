import { call, put, takeLatest } from 'redux-saga/effects';

import {
  deleteMessageFailed,
  deleteMessageInProgress,
  deleteMessageSuccessful
} from '../containers/Me/actions';
import { DELETE_MESSAGE } from '../containers/Me/constants';

import AppAPI from '../api';
import { ActionType } from '../constants/types';

function* delMessage(action: ActionType<number>) {
  try {
    yield put(deleteMessageInProgress());
    const result = yield call(AppAPI.deleteMessage, action.payload);
    yield put(deleteMessageSuccessful(result.data));
  } catch (err) {
    // tslint:disable-next-line:no-console
    console.error(err);
    yield put(deleteMessageFailed());
  }
}

export function* deleteMessage() {
  yield takeLatest(DELETE_MESSAGE, delMessage);
}
