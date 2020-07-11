import * as Immutable from 'seamless-immutable'

// import config from '../config'

import {
  LOGIN,
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
  // auth0: {
  //   domain: process.env.REACT_APP_AUTH0_DOMAIN || 'example.com',
  //   clientID: process.env.REACT_APP_AUTH0_CLIENT_ID || 'changeme',
  //   audience:
  //     `https://${process.env.REACT_APP_AUTH0_DOMAIN}/userinfo` ||
  //     'changeme.example.com',
  //   redirectUri: config.env.callbackURL,
  //   responseType: 'token id_token',
  //   scope: 'openid profile',
  // },
  // accessToken: localStorage.getItem('accessToken'),
  // idToken: null,
  // jwtToken: localStorage.getItem('jwtToken'),
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
    case LOGIN:
      return state
        .set('accessToken', action.payload.accessToken)
        .set('idToken', action.payload.idToken)
        .set('tokenExpiresAt', action.payload.tokenExpiresAt)

    case LOGOUT:
      localStorage.clear()
      return state
        .merge(initialState)
        .set('accessToken', null)
        .set('jwtToken', null)

    case TOKEN_LOADED:
      localStorage.setItem('jwtToken', action.payload)
      return state.set('jwtToken', action.payload)

    case TOKEN_LOAD_ERROR:
      return state
        .set('accessToken', null)
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
        .set('accessToken', null)
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
