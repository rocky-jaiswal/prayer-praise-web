import {
  CHANGE_EXISTING_MESSAGE_SHARED_STATUS,
  CHANGE_EXISTING_MESSAGE_TEXT,
  DELETE_MESSAGE,
  DELETE_MESSAGE_FAILED,
  DELETE_MESSAGE_INFLIGHT,
  DELETE_MESSAGE_SUCCESS,
  EDIT_MESSAGE,
  EDIT_MESSAGE_FAILED,
  EDIT_MESSAGE_INFLIGHT,
  EDIT_MESSAGE_SUCCESS,
  FETCH_MY_MESSAGES,
  FETCH_MY_MESSAGES_FAILED,
  FETCH_MY_MESSAGES_INFLIGHT,
  FETCH_MY_MESSAGES_SUCCESS,
  SET_MESSAGE_TO_EDIT,
  UPDATE_MESSAGE,
  UPDATE_MESSAGE_FAILED,
  UPDATE_MESSAGE_INFLIGHT,
  UPDATE_MESSAGE_SUCCESS,
  SET_MESSAGE_TO_VIEW,
} from './constants'
import { ShareStatus } from '../../constants/enums'

export function fetchMyMessages() {
  return {
    type: FETCH_MY_MESSAGES,
  }
}

export function fetchMyMessagesInProgress() {
  return {
    type: FETCH_MY_MESSAGES_INFLIGHT,
  }
}

export function fetchMyMessagesSuccessful(payload: any) {
  return {
    payload,
    type: FETCH_MY_MESSAGES_SUCCESS,
  }
}

export function fetchMyMessagesFailed() {
  return {
    type: FETCH_MY_MESSAGES_FAILED,
  }
}

export function deleteMessage(payload: number) {
  return {
    payload,
    type: DELETE_MESSAGE,
  }
}

export function deleteMessageInProgress() {
  return {
    type: DELETE_MESSAGE_INFLIGHT,
  }
}

export function deleteMessageSuccessful(payload: any) {
  return {
    payload,
    type: DELETE_MESSAGE_SUCCESS,
  }
}

export function deleteMessageFailed() {
  return {
    type: DELETE_MESSAGE_FAILED,
  }
}

export function editMessage(payload: number | string) {
  return {
    payload,
    type: EDIT_MESSAGE,
  }
}

export function editMessageInProgress() {
  return {
    type: EDIT_MESSAGE_INFLIGHT,
  }
}

// tslint:disable-next-line:no-any
export function editMessageSuccessful(payload: any) {
  return {
    payload,
    type: EDIT_MESSAGE_SUCCESS,
  }
}

export function editMessageFailed() {
  return {
    type: EDIT_MESSAGE_FAILED,
  }
}

export function updateMessage() {
  return {
    type: UPDATE_MESSAGE,
  }
}

export function updateMessageInProgress() {
  return {
    type: UPDATE_MESSAGE_INFLIGHT,
  }
}

export function updateMessageSuccessful() {
  return {
    type: UPDATE_MESSAGE_SUCCESS,
  }
}

export function updateMessageFailed() {
  return {
    type: UPDATE_MESSAGE_FAILED,
  }
}

// tslint:disable-next-line:no-any
export function changeExistingMessageText(payload: any) {
  return {
    payload,
    type: CHANGE_EXISTING_MESSAGE_TEXT,
  }
}

export function changeExistingMessageSharedStatus(payload: ShareStatus) {
  return {
    payload,
    type: CHANGE_EXISTING_MESSAGE_SHARED_STATUS,
  }
}

export function setMessageToEdit(payload: number) {
  return {
    payload,
    type: SET_MESSAGE_TO_EDIT,
  }
}

export function setMessageToView(payload: number) {
  return {
    payload,
    type: SET_MESSAGE_TO_VIEW,
  }
}

export function unsetMessageToView() {
  return {
    type: SET_MESSAGE_TO_VIEW,
  }
}
