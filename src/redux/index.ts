import { combineReducers, Reducer } from 'redux';

import { appReducer, initialState as appInitialState } from './app';
import { messagesReducer, initialState as messagesInitialState } from './messages';
import { myDataReducer, initialState as myDataInitialState } from './myData';
import { sharedMessagesReducer, initialState as sharedMessagesInitialState } from './sharedMessages';
import { routeReducer } from './route';

import { RootStateType, ActionType } from '../constants/types';

export const reduxInitialState: RootStateType = {
  app: appInitialState,
  messages: messagesInitialState,
  myData: myDataInitialState,
  sharedMessages: sharedMessagesInitialState
};

export function createReducer(): Reducer<RootStateType> {
  const reducer = combineReducers<RootStateType>({
    app: appReducer,
    messages: messagesReducer,
    myData: myDataReducer,
    route: routeReducer,
    sharedMessages: sharedMessagesReducer
  });

  const rootReducer = (state: RootStateType, action: ActionType<{}>): RootStateType => {
    // if (action.type === LOGOUT) {
    //   sessionStorage.clear();
    //   state = reduxInitialState;
    // }
    return reducer(state, action);
  };

  return rootReducer;
}
