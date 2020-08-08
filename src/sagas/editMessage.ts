import { call, put, takeLatest } from 'redux-saga/effects'
import humps from 'humps'

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

    const data = result.data

    yield put(editMessageSuccessful(humps.camelizeKeys(data)))
  } catch (err) {
    console.error(err)
    yield put(editMessageFailed())
  }
}

export function* editMessageWatcher() {
  yield takeLatest(EDIT_MESSAGE, editMessage)
}
