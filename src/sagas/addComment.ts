import { call, put, select, takeLatest } from 'redux-saga/effects'
import humps from 'humps'

import { RootStateType } from '../constants/types'
import {
  addCommentFailed,
  addCommentSuccessful,
  ADD_COMMENT,
} from '../containers/SharedMessage/actions'
import AppAPI from '../api'

function* addComment() {
  try {
    const state: RootStateType = yield select()
    const comment = state.sharedMessageDetails.newComment
    const msgId = state.sharedMessageDetails.selectedSharedMessage!.id

    const result = yield call(AppAPI.createComment, {
      msgId: `${msgId}`,
      comment,
    } as Record<string, string>)

    const data = result.data

    yield put(addCommentSuccessful(humps.camelizeKeys(data)))
  } catch (err) {
    yield put(addCommentFailed())
    console.error(err)
  }
}

export function* addCommentWatcher() {
  yield takeLatest(ADD_COMMENT, addComment)
}
