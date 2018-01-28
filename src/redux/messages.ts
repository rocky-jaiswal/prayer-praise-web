import * as Immutable from 'seamless-immutable';

import { PrayerPraise, ShareStatus } from '../constants/enums';
import { MessagesStateType, ActionType } from '../constants/types';
import {
  CHANGE_MESSAGE_TEXT,
  CHANGE_MESSAGE_TYPE,
  CHANGE_SHARED_STATUS,
  CLEAR_DISPLAY,
  SUBMIT_MESSAGE_FAILED,
  SUBMIT_MESSAGE_INFLIGHT,
  SUBMIT_MESSAGE_SUCCESS
} from '../containers/Praise/constants';

const istate: MessagesStateType = {
  displayMessage: undefined,
  error: undefined,
  loading: false,
  messageText: '',
  messageType: PrayerPraise.PRAISE,
  sharedStatus:  ShareStatus.SHARED_WITH_PRAYER_TEAM
};

export const initialState = Immutable.from(istate);

// tslint:disable-next-line:no-any
export function messagesReducer(state: any = initialState, action: ActionType<any>) {
  switch (action.type) {
    case CHANGE_MESSAGE_TYPE:
      return state
        .set('messageType', action.payload);

    case CHANGE_MESSAGE_TEXT:
      return state
        .set('displayMessage', '')
        .set('messageText', action.payload);

    case CHANGE_SHARED_STATUS:
      return state
        .set('displayMessage', '')
        .set('sharedStatus', action.payload);

    case SUBMIT_MESSAGE_INFLIGHT:
      return state
        .set('loading', true);

    case SUBMIT_MESSAGE_SUCCESS:
      return state
        .set('loading', false)
        .set('messageText', '')
        .set('displayMessage', 'message.success');

    case SUBMIT_MESSAGE_FAILED:
      return state
        .set('loading', false)
        .set('error', SUBMIT_MESSAGE_FAILED)
        .set('displayMessage', 'message.failure');

    case CLEAR_DISPLAY:
      return state
        .set('displayMessage', undefined);

    default:
      return state;
  }
}
