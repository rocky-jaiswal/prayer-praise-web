import { call, put, takeLatest } from 'redux-saga/effects'
import humps from 'humps'

import {
  fetchSharedMessageFailed,
  fetchSharedMessageInProgress,
  fetchSharedMessageSuccessful,
} from '../containers/SharedMessage/actions'
import { ActionType } from '../constants/types'
import { FETCH_SHARED_MESSAGE } from '../containers/SharedMessage/actions'

import AppAPI from '../api'

function* fetchSharedMessage(action: ActionType<string>) {
  try {
    yield put(fetchSharedMessageInProgress())

    const result = yield call(
      AppAPI.fetchSharedMessage,
      action.payload as string
    )

    yield put(fetchSharedMessageSuccessful(humps.camelizeKeys(result.data)))
  } catch (err) {
    console.error(err)
    yield put(fetchSharedMessageFailed())
  }
}

export function* fetchSharedMessageWatcher() {
  yield takeLatest(FETCH_SHARED_MESSAGE, fetchSharedMessage)
}
