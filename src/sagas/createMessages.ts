import { call, put, select, takeLatest } from 'redux-saga/effects'

import { SUBMIT_MESSAGE } from '../containers/Praise/constants'

import {
  submitMessageFailed,
  submitMessageInProgress,
  submitMessageSuccessful,
} from '../containers/Praise/actions'
import { SharedMessageType } from '../constants/types'

import API from '../api'

function* createMessage() {
  try {
    yield put(submitMessageInProgress())

    const state = yield select()
    const messageType = state.messages.messageType
    const messageText = state.messages.messageText
    const sharedStatus = state.messages.sharedStatus

    yield call(API.createMessage, {
      messageType,
      messageText,
      sharedStatus,
    } as SharedMessageType)
    yield put(submitMessageSuccessful())
  } catch (err) {
    // tslint:disable-next-line:no-console
    console.error(err)
    yield put(submitMessageFailed())
  }
}

export function* createMessageWatcher() {
  yield takeLatest(SUBMIT_MESSAGE, createMessage)
}
