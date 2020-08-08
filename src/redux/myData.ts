import * as Immutable from 'seamless-immutable'

import { MyDataType, ActionType } from '../constants/types'
import {
  CHANGE_EXISTING_MESSAGE_SHARED_STATUS,
  CHANGE_EXISTING_MESSAGE_TEXT,
  DELETE_MESSAGE_FAILED,
  DELETE_MESSAGE_INFLIGHT,
  DELETE_MESSAGE_SUCCESS,
  EDIT_MESSAGE_FAILED,
  EDIT_MESSAGE_INFLIGHT,
  EDIT_MESSAGE_SUCCESS,
  FETCH_MY_MESSAGES_FAILED,
  FETCH_MY_MESSAGES_INFLIGHT,
  FETCH_MY_MESSAGES_SUCCESS,
  SET_MESSAGE_TO_EDIT,
  UPDATE_MESSAGE_FAILED,
  UPDATE_MESSAGE_INFLIGHT,
  UPDATE_MESSAGE_SUCCESS,
  SET_MESSAGE_TO_VIEW,
  UNSET_MESSAGE_TO_VIEW,
} from '../containers/Me/constants'

const istate: MyDataType = {
  displayMessage: undefined,
  error: undefined,
  loading: false,
  messageForEdit: {
    id: undefined,
    messageText: undefined,
    sharedStatus: undefined,
    messageType: undefined,
  },
  myMessages: [],
  selectedMessageId: null,
}

export const initialState = Immutable.from(istate)

export function myDataReducer(
  state: any = initialState,
  action: ActionType<any>
) {
  switch (action.type) {
    case FETCH_MY_MESSAGES_INFLIGHT:
      return state.set('loading', true)

    case FETCH_MY_MESSAGES_SUCCESS:
      return state
        .set('loading', false)
        .set('myMessages', action.payload)
        .set('displayMessage', undefined)

    case FETCH_MY_MESSAGES_FAILED:
      return state
        .set('loading', false)
        .set('error', FETCH_MY_MESSAGES_FAILED)
        .set('displayMessage', 'Please refresh / try again later.')

    case DELETE_MESSAGE_INFLIGHT:
      return state.set('loading', true)

    case DELETE_MESSAGE_SUCCESS:
      return state
        .set('loading', false)
        .set('myMessages', action.payload)
        .set('displayMessage', 'message.deleted')

    case DELETE_MESSAGE_FAILED:
      return state
        .set('loading', false)
        .set('error', DELETE_MESSAGE_FAILED)
        .set('displayMessage', 'Please refresh / try again later.')

    case SET_MESSAGE_TO_VIEW:
      return state.set('selectedMessageId', action.payload)

    case UNSET_MESSAGE_TO_VIEW:
      return state.set('selectedMessageId', null)

    case SET_MESSAGE_TO_EDIT:
      return state.setIn(['messageForEdit', 'id'], action.payload)

    case EDIT_MESSAGE_INFLIGHT:
      return state.set('loading', true)

    case EDIT_MESSAGE_SUCCESS:
      return state
        .set('loading', false)
        .setIn(['messageForEdit', 'id'], action.payload.id)
        .setIn(['messageForEdit', 'sharedStatus'], action.payload.sharedStatus)
        .setIn(['messageForEdit', 'messageText'], action.payload.messageText)
        .setIn(['messageForEdit', 'messageType'], action.payload.messageType)
        .set('displayMessage', undefined)

    case EDIT_MESSAGE_FAILED:
      return state
        .set('loading', false)
        .set('error', EDIT_MESSAGE_FAILED)
        .set('displayMessage', 'message.failure')

    case UPDATE_MESSAGE_INFLIGHT:
      return state.set('loading', true)

    case UPDATE_MESSAGE_SUCCESS:
      return state
        .set('loading', false)
        .set('displayMessage', 'message.success')

    case UPDATE_MESSAGE_FAILED:
      return state
        .set('loading', false)
        .set('error', UPDATE_MESSAGE_FAILED)
        .set('displayMessage', 'message.failure')

    case CHANGE_EXISTING_MESSAGE_SHARED_STATUS:
      return state.setIn(['messageForEdit', 'sharedStatus'], action.payload)

    case CHANGE_EXISTING_MESSAGE_TEXT:
      return state.setIn(['messageForEdit', 'messageText'], action.payload)

    default:
      return state
  }
}
