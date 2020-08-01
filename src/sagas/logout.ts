import { put, takeLatest } from 'redux-saga/effects'
import { push } from 'connected-react-router'

import { LOGOUT } from '../containers/App/constants'
import { ActionType } from '../constants/types'

import { logoutSuccess } from '../containers/App/actions'

function* logout(_action: ActionType<any>) {
  try {
    sessionStorage.clear()
    yield put(logoutSuccess())
    yield put(push('/'))
  } catch (err) {
    console.error(err)
  }
}

export function* logoutWatcher() {
  yield takeLatest(LOGOUT, logout)
}
