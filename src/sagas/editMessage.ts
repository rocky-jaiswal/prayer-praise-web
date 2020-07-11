import { call, put, takeLatest } from 'redux-saga/effects'

import {
  editMessageFailed,
  editMessageInProgress,
  editMessageSuccessful,
} from '../containers/Me/actions'
import { EDIT_MESSAGE } from '../containers/Me/constants'

import AppAPI from '../api'
import { ActionType } from '../constants/types'

function* editMessage(action: ActionType<number>) {
  try {
    yield put(editMessageInProgress())
    const result = yield call(AppAPI.editMessage, action.payload as number)
    yield put(editMessageSuccessful(result.data))
  } catch (err) {
    // tslint:disable-next-line:no-console
    console.error(err)
    yield put(editMessageFailed())
  }
}

export function* editMessageWatcher() {
  yield takeLatest(EDIT_MESSAGE, editMessage)
}
