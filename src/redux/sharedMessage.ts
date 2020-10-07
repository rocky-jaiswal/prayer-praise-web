import Immutable from 'seamless-immutable'

import { SelectedSharedMessageType, ActionType } from '../constants/types'
import {
  FETCH_SHARED_MESSAGE_INFLIGHT,
  FETCH_SHARED_MESSAGE_SUCCESS,
  FETCH_SHARED_MESSAGE_FAILED,
  CHANGE_COMMENT,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_INFLIGHT,
} from '../containers/SharedMessage/actions'

const istate: SelectedSharedMessageType = {
  displayMessage: undefined,
  newComment: '',
  selectedSharedMessage: undefined,
  error: undefined,
  loading: false,
  loadingComments: false,
}

export const initialState = Immutable.from(istate)

export function sharedMessageDetailsReducer(
  state: any = initialState,
  action: ActionType<any>
) {
  switch (action.type) {
    case FETCH_SHARED_MESSAGE_INFLIGHT:
      return state.set('loading', true)

    case FETCH_SHARED_MESSAGE_SUCCESS:
      return state
        .set('loading', false)
        .set('selectedSharedMessage', Immutable.from(action.payload))
        .set('error', undefined)
        .set('displayMessage', undefined)

    case FETCH_SHARED_MESSAGE_FAILED:
      return state
        .set('loading', false)
        .set('error', FETCH_SHARED_MESSAGE_FAILED)
        .set('displayMessage', 'message.retry')

    case CHANGE_COMMENT:
      return state.set('newComment', action.payload)

    case ADD_COMMENT_SUCCESS:
      return state
        .set('loadingComments', false)
        .set('selectedSharedMessage', Immutable.from(action.payload))
        .set('newComment', '')

    case ADD_COMMENT_INFLIGHT:
      return state.set('loadingComments', true).set('newComment', '')

    default:
      return state
  }
}
