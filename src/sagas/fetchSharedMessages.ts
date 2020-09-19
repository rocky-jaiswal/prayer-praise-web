import { call, put, select, takeLatest } from 'redux-saga/effects'
import humps from 'humps'

import {
  fetchSharedMessagesFailed,
  fetchSharedMessagesInProgress,
  fetchSharedMessagesSuccessful,
} from '../containers/Root/actions'
import { SharedMessageType } from '../constants/types'
import { FETCH_SHARED_MESSAGES } from '../containers/Root/constants'

import AppAPI from '../api'

function* fetchSharedMessages() {
  try {
    yield put(fetchSharedMessagesInProgress())
    const state = yield select()
    const result = yield call(
      AppAPI.fetchSharedMessages,
      state.sharedMessages.currentPage
    )

    const data = result.data
    data.content = data.content.map((msg: SharedMessageType) =>
      humps.camelizeKeys(msg)
    )

    yield put(fetchSharedMessagesSuccessful(data))
  } catch (err) {
    console.error(err)
    yield put(fetchSharedMessagesFailed())
  }
}

export function* fetchSharedMessagesWatcher() {
  yield takeLatest(FETCH_SHARED_MESSAGES, fetchSharedMessages)
}
