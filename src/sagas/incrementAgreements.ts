import { call, put, takeLatest } from 'redux-saga/effects'
import humps from 'humps'

import { ActionType } from '../constants/types'
import { INCREMENT_AGREEMENTS } from '../containers/Root/constants'
import { incrementAgreementsSuccessful } from '../containers/Root/actions'
import AppAPI from '../api'

function* incrementAgreements(action: ActionType<number>) {
  try {
    const agreedOn = yield localStorage.getItem('agreedOn')
    const agreedOnJS = agreedOn ? JSON.parse(agreedOn) : []
    // return if already agreed on
    if (agreedOnJS.includes(action.payload)) return

    const result = yield call(
      AppAPI.incrementAgreements,
      action.payload as number
    )

    const data = result.data

    yield put(incrementAgreementsSuccessful(humps.camelizeKeys(data)))

    yield localStorage.setItem(
      'agreedOn',
      JSON.stringify(agreedOnJS.concat([action.payload]))
    )
  } catch (err) {
    console.error(err)
  }
}

export function* incrementAgreementsWatcher() {
  yield takeLatest(INCREMENT_AGREEMENTS, incrementAgreements)
}
