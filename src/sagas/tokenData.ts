import { call, put, select, takeLatest } from 'redux-saga/effects'

import { tokenLoaded, tokenLoadError } from '../containers/App/actions'
import { FETCH_TOKEN } from '../containers/App/constants'

import AppAPI from '../api'

function* tokenData() {
  const state = yield select()
  const accessToken = state.app.accessToken

  try {
    const result = yield call(AppAPI.createToken, accessToken)
    yield put(tokenLoaded(result.data.token))
  } catch (err) {
    console.error(err)
    yield put(tokenLoadError())
  }
}

export function* tokenDataWatcher() {
  yield takeLatest(FETCH_TOKEN, tokenData)
}
