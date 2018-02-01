import * as Immutable from 'seamless-immutable';

import config from '../config';

import {
  LOGIN,
  LOGOUT,
  RESET_SIDEBAR,
  SWITCH_LANGUAGE,
  TOGGLE_SIDEBAR,
  TOKEN_LOAD_ERROR,
  TOKEN_LOADED,
  USER_PROFILE_LOAD_ERROR,
  USER_PROFILE_LOADED
} from '../containers/App/constants';
import { AppStateType } from '../constants/types';

export const istate: AppStateType = {
  auth0: {
    // tslint:disable-next-line:no-string-literal
    domain: process.env['REACT_APP_DOMAIN'] || 'example.com',
    // tslint:disable-next-line:no-string-literal
    clientID: process.env['REACT_APP_AUTH0_CLIENT_ID'] || 'changeme',
    // tslint:disable-next-line:no-string-literal
    audience: `https://${process.env['REACT_APP_AUTH0_DOMAIN']}/userinfo` || 'changeme.example.com',
    redirectUri: config.env.callbackURL,
    responseType: 'token id_token',
    scope: 'openid profile'
  },
  accessToken: sessionStorage.getItem('accessToken'),
  error: null,
  idToken: null,
  jwtToken: sessionStorage.getItem('jwtToken'),
  locale: 'en',
  profilePic: null,
  sidebarVisible: true,
  tokenExpiresAt: undefined,
  username: undefined
};

export const initialState = Immutable.from(istate);

// tslint:disable-next-line:no-any
export function appReducer(state: any = initialState, action: any) {
  switch (action.type) {

    case LOGIN:
      return state
        .set('accessToken', action.payload.accessToken)
        .set('idToken', action.payload.idToken)
        .set('tokenExpiresAt', action.payload.tokenExpiresAt);

    case LOGOUT:
      sessionStorage.clear();
      return state
        .merge(initialState)
        .set('accessToken', null)
        .set('jwtToken', null);

    case TOKEN_LOADED:
      sessionStorage.setItem('jwtToken', action.payload);
      return state
        .set('jwtToken', action.payload);

    case TOKEN_LOAD_ERROR:
      return state
        .set('accessToken', null)
        .set('jwtToken', null)
        .set('username', null)
        .set('profilePic', null)
        .set('error', TOKEN_LOAD_ERROR);

    case USER_PROFILE_LOADED:
      return state
        .set('username', action.payload.name)
        .set('profilePic', action.payload.picture);

    case USER_PROFILE_LOAD_ERROR:
      return state
        .set('accessToken', null)
        .set('jwtToken', null)
        .set('username', null)
        .set('profilePic', null)
        .set('error', TOKEN_LOAD_ERROR);

    case SWITCH_LANGUAGE:
      return state
        .set('locale', action.payload);

    case TOGGLE_SIDEBAR:
      return state
        .set('sidebarVisible', !state.get('sidebarVisible'));

    case RESET_SIDEBAR:
      return state
        .set('sidebarVisible', true);

    default:
      return state;
  }
}
