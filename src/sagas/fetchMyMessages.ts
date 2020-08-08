import { call, put, takeLatest } from 'redux-saga/effects'
import humps from 'humps'

import {
  fetchMyMessagesFailed,
  fetchMyMessagesInProgress,
  fetchMyMessagesSuccessful,
} from '../containers/Me/actions'

import { logout } from '../containers/App/actions'
import { SharedMessageType } from '../constants/types'
import { FETCH_MY_MESSAGES } from '../containers/Me/constants'

import AppAPI from '../api'

function* fetchMyMessages() {
  try {
    yield put(fetchMyMessagesInProgress())
    const result = yield call(AppAPI.fetchMyMessages)

    const data = result.data

    yield put(
      fetchMyMessagesSuccessful(
        data.map((msg: SharedMessageType) => humps.camelizeKeys(msg))
      )
    )
  } catch (err) {
    console.error(err)
    yield put(fetchMyMessagesFailed())
    yield put(logout())
  }
}

export function* fetchMyMessagesWatcher() {
  yield takeLatest(FETCH_MY_MESSAGES, fetchMyMessages)
}
