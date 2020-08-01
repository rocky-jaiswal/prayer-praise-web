import { call, put, takeLatest } from 'redux-saga/effects'

import { tokenLoaded, tokenLoadError } from '../containers/App/actions'
import { LOGIN } from '../containers/App/constants'
import { ActionType } from '../constants/types'

import AppAPI from '../api'

function* login(action: ActionType<any>) {
  const accessToken = action.payload

  try {
    const result = yield call(AppAPI.login, accessToken)
    yield put(tokenLoaded(result.data.token))
  } catch (err) {
    console.error(err)
    yield put(tokenLoadError())
  }
}

export function* loginWatcher() {
  yield takeLatest(LOGIN, login)
}
