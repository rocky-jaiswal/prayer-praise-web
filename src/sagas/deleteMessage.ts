import { call, put, takeLatest } from 'redux-saga/effects'
import humps from 'humps'

import {
  deleteMessageFailed,
  deleteMessageInProgress,
  deleteMessageSuccessful,
} from '../containers/Me/actions'
import { SharedMessageType } from '../constants/types'
import { DELETE_MESSAGE } from '../containers/Me/constants'

import AppAPI from '../api'
import { ActionType } from '../constants/types'

function* deleteMessage(action: ActionType<number>) {
  try {
    yield put(deleteMessageInProgress())
    const result = yield call(AppAPI.deleteMessage, action.payload as number)

    const data = result.data
    yield put(
      deleteMessageSuccessful(
        data.map((msg: SharedMessageType) => humps.camelizeKeys(msg))
      )
    )
  } catch (err) {
    console.error(err)
    yield put(deleteMessageFailed())
  }
}

export function* deleteMessageWatcher() {
  yield takeLatest(DELETE_MESSAGE, deleteMessage)
}
