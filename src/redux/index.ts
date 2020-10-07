import { combineReducers, Reducer } from 'redux'
import { connectRouter } from 'connected-react-router'

import { appReducer, initialState as appInitialState } from './app'
import {
  messagesReducer,
  initialState as messagesInitialState,
} from './messages'
import { myDataReducer, initialState as myDataInitialState } from './myData'
import {
  sharedMessagesReducer,
  initialState as sharedMessagesInitialState,
} from './sharedMessages'
import {
  sharedMessageDetailsReducer,
  initialState as sharedMessageDetailsInitialState,
} from './sharedMessage'
// import { routeReducer } from './route'

import { RootStateType, ActionType } from '../constants/types'

export const reduxInitialState: RootStateType = {
  app: appInitialState,
  messages: messagesInitialState,
  myData: myDataInitialState,
  sharedMessages: sharedMessagesInitialState,
  sharedMessageDetails: sharedMessageDetailsInitialState,
}

export function createReducer(history: any): Reducer<RootStateType> {
  const reducer = combineReducers<RootStateType>({
    app: appReducer,
    messages: messagesReducer,
    myData: myDataReducer,
    router: connectRouter(history),
    sharedMessages: sharedMessagesReducer,
    sharedMessageDetails: sharedMessageDetailsReducer,
  })

  const rootReducer = (
    state: RootStateType | undefined,
    action: ActionType<{}>
  ): RootStateType => {
    // if (action.type === LOGOUT) {
    //   localStorage.clear();
    //   state = reduxInitialState;
    // }
    return reducer(state, action)
  }

  return rootReducer
}
