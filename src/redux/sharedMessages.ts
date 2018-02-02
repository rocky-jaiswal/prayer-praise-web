import * as Immutable from 'seamless-immutable';

import { SharedMessagesType, ActionType } from '../constants/types';
import {
  EXPAND_MESSAGE,
  FETCH_SHARED_MESSAGES_FAILED,
  FETCH_SHARED_MESSAGES_INFLIGHT,
  FETCH_SHARED_MESSAGES_SUCCESS,
  SET_PAGE
} from '../containers/Root/constants';

const init: SharedMessagesType = {
  displayMessage: undefined,
  error: undefined,
  expandedMessage: undefined,
  loading: false,
  messages: [],
  currentPage: 1,
  size: 20,
  totalElements: 0,
  totalPages: 1
};

export const initialState = Immutable.from(init);

// tslint:disable-next-line:no-any
export function sharedMessagesReducer(state: any = initialState, action: ActionType<any>) {
  switch (action.type) {

    case SET_PAGE:
      return state
        .set('currentPage', action.payload);

    case FETCH_SHARED_MESSAGES_INFLIGHT:
      return state
        .set('loading', true);

    case FETCH_SHARED_MESSAGES_SUCCESS:
      return state
        .set('loading', false)
        .set('messages', action.payload.content)
        .set('currentPage', parseInt(action.payload.currentPage, 10))
        .set('size', action.payload.size)
        .set('totalElements', action.payload.totalElements)
        .set('totalPages', action.payload.totalPages)
        .set('displayMessage', undefined);

    case FETCH_SHARED_MESSAGES_FAILED:
      return state
        .set('loading', false)
        .set('error', FETCH_SHARED_MESSAGES_FAILED)
        .set('displayMessage', 'Please refresh / try again later.');

    case EXPAND_MESSAGE:
      return state
        .set('expandedMessage', state.expandedMessage === action.payload ? undefined : action.payload);

    default:
      return state;
  }
}
