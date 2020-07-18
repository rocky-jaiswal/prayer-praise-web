import * as Immutable from 'seamless-immutable'

import {
  LOGOUT,
  RESET_SIDEBAR,
  SWITCH_LANGUAGE,
  TOGGLE_SIDEBAR,
  TOKEN_LOAD_ERROR,
  TOKEN_LOADED,
  USER_PROFILE_LOAD_ERROR,
  USER_PROFILE_LOADED,
} from '../containers/App/constants'
import { AppStateType } from '../constants/types'
import { LocaleEnum } from '../constants/enums'

export const istate: AppStateType = {
  jwtToken: sessionStorage.getItem('jwtToken'),
  error: null,
  locale: LocaleEnum.en,
  profilePic: null,
  sidebarVisible: true,
  tokenExpiresAt: undefined,
  username: undefined,
  admin: false,
}

export const initialState = Immutable.from(istate)

export function appReducer(state: any = initialState, action: any) {
  switch (action.type) {
    case LOGOUT:
      sessionStorage.clear()
      return state.merge(initialState).set('jwtToken', null)

    case TOKEN_LOADED:
      sessionStorage.setItem('jwtToken', action.payload)
      return state.set('jwtToken', action.payload)

    case TOKEN_LOAD_ERROR:
      return state
        .set('jwtToken', null)
        .set('username', null)
        .set('profilePic', null)
        .set('error', TOKEN_LOAD_ERROR)

    case USER_PROFILE_LOADED:
      return state
        .set('admin', action.payload.admin)
        .set('username', action.payload.name)
        .set('profilePic', action.payload.picture)

    case USER_PROFILE_LOAD_ERROR:
      return state
        .set('jwtToken', null)
        .set('username', null)
        .set('profilePic', null)
        .set('error', TOKEN_LOAD_ERROR)

    case SWITCH_LANGUAGE:
      return state.set('locale', action.payload)

    case TOGGLE_SIDEBAR:
      return state.set('sidebarVisible', !state.sidebarVisible)

    case RESET_SIDEBAR:
      return state.set('sidebarVisible', true)

    default:
      return state
  }
}
