export const FETCH_SHARED_MESSAGE = 'app/SHARED/FETCH_SHARED_MESSAGE'
export const FETCH_SHARED_MESSAGE_FAILED =
  'app/SHARED/FETCH_SHARED_MESSAGE_FAILED'
export const FETCH_SHARED_MESSAGE_INFLIGHT =
  'app/SHARED/FETCH_SHARED_MESSAGE_INFLIGHT'
export const FETCH_SHARED_MESSAGE_SUCCESS =
  'app/SHARED/FETCH_SHARED_MESSAGE_SUCCESS'

export const CHANGE_COMMENT = 'app/SHARED/CHANGE_COMMENT'
export const ADD_COMMENT = 'app/SHARED/ADD_COMMENT'
export const ADD_COMMENT_FAILED = 'app/SHARED/ADD_COMMENT_FAILED'
export const ADD_COMMENT_INFLIGHT = 'app/SHARED/ADD_COMMENT_INFLIGHT'
export const ADD_COMMENT_SUCCESS = 'app/SHARED/ADD_COMMENT_SUCCESS'

export const SET_MESSAGE = 'app/SHARED/SET_MESSAGE'

export function fetchSharedMessage(payload: string) {
  return {
    payload,
    type: FETCH_SHARED_MESSAGE,
  }
}

export function fetchSharedMessageInProgress() {
  return {
    type: FETCH_SHARED_MESSAGE_INFLIGHT,
  }
}

export function fetchSharedMessageSuccessful(payload: any) {
  return {
    payload,
    type: FETCH_SHARED_MESSAGE_SUCCESS,
  }
}

export function fetchSharedMessageFailed() {
  return {
    type: FETCH_SHARED_MESSAGE_FAILED,
  }
}

export function changeComment(payload: string) {
  return {
    payload,
    type: CHANGE_COMMENT,
  }
}

export function addComment() {
  return {
    type: ADD_COMMENT,
  }
}

export function addCommentInProgress() {
  return {
    type: ADD_COMMENT_INFLIGHT,
  }
}

export function addCommentSuccessful(payload: any) {
  return {
    payload,
    type: ADD_COMMENT_SUCCESS,
  }
}

export function addCommentFailed() {
  return {
    type: ADD_COMMENT_FAILED,
  }
}
