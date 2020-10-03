import {
  EXPAND_MESSAGE,
  FETCH_SHARED_MESSAGES,
  FETCH_SHARED_MESSAGES_FAILED,
  FETCH_SHARED_MESSAGES_INFLIGHT,
  FETCH_SHARED_MESSAGES_SUCCESS,
  INCREMENT_AGREEMENTS,
  INCREMENT_AGREEMENTS_SUCCESS,
  SET_PAGE,
} from './constants'

export function fetchSharedMessages() {
  return {
    type: FETCH_SHARED_MESSAGES,
  }
}

export function fetchSharedMessagesInProgress() {
  return {
    type: FETCH_SHARED_MESSAGES_INFLIGHT,
  }
}

export function fetchSharedMessagesSuccessful(payload: any) {
  return {
    payload,
    type: FETCH_SHARED_MESSAGES_SUCCESS,
  }
}

export function fetchSharedMessagesFailed() {
  return {
    type: FETCH_SHARED_MESSAGES_FAILED,
  }
}

export function expandMessage(payload: number) {
  return {
    payload,
    type: EXPAND_MESSAGE,
  }
}

export function setPage(payload: number) {
  return {
    payload,
    type: SET_PAGE,
  }
}

export function incrementAgreements(payload: number) {
  return {
    payload,
    type: INCREMENT_AGREEMENTS,
  }
}

export function incrementAgreementsSuccessful(payload: any) {
  return {
    payload,
    type: INCREMENT_AGREEMENTS_SUCCESS,
  }
}
