import { PrayerPraise, ShareStatus } from '../../constants/enums'
import {
  CHANGE_MESSAGE_TEXT,
  CHANGE_MESSAGE_TYPE,
  CHANGE_SHARED_STATUS,
  CLEAR_DISPLAY,
  SUBMIT_MESSAGE,
  SUBMIT_MESSAGE_FAILED,
  SUBMIT_MESSAGE_INFLIGHT,
  SUBMIT_MESSAGE_SUCCESS,
} from './constants'

export function changeMessageType(payload: PrayerPraise) {
  return {
    payload,
    type: CHANGE_MESSAGE_TYPE,
  }
}

export function changeMessageText(payload: string) {
  return {
    payload,
    type: CHANGE_MESSAGE_TEXT,
  }
}

export function changeSharedStatus(payload: ShareStatus) {
  return {
    payload,
    type: CHANGE_SHARED_STATUS,
  }
}

export function submitMessage() {
  return {
    type: SUBMIT_MESSAGE,
  }
}

export function submitMessageInProgress() {
  return {
    type: SUBMIT_MESSAGE_INFLIGHT,
  }
}

export function submitMessageSuccessful() {
  return {
    type: SUBMIT_MESSAGE_SUCCESS,
  }
}

export function submitMessageFailed() {
  return {
    type: SUBMIT_MESSAGE_FAILED,
  }
}

export function clearDisplay() {
  return {
    type: CLEAR_DISPLAY,
  }
}
