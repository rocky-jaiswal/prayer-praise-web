import {
  FETCH_TOKEN,
  FETCH_USER_PROFILE,
  LOGIN,
  LOGOUT,
  RESET_SIDEBAR,
  SWITCH_LANGUAGE,
  TOGGLE_SIDEBAR,
  TOKEN_LOAD_ERROR,
  TOKEN_LOADED,
  USER_PROFILE_LOAD_ERROR,
  USER_PROFILE_LOADED
} from './constants';

// tslint:disable-next-line:no-any
export function login(payload: any) {
  return {
    payload,
    type: LOGIN
  };
}

export function logout() {
  return {
    type: LOGOUT
  };
}

export function fetchToken() {
  return {
    type: FETCH_TOKEN
  };
}

export function tokenLoaded(payload: string) {
  return {
    payload,
    type: TOKEN_LOADED
  };
}

export function tokenLoadError() {
  return {
    type: TOKEN_LOAD_ERROR
  };
}

export function fetchUserProfile() {
  return {
    type: FETCH_USER_PROFILE
  };
}

export function userProfileLoaded(payload: { name: string, picture: string }) {
  return {
    payload,
    type: USER_PROFILE_LOADED
  };
}

export function userProfileLoadError() {
  return {
    type: USER_PROFILE_LOAD_ERROR
  };
}

export function switchLanguage(payload: string) {
  return {
    payload,
    type: SWITCH_LANGUAGE
  };
}

export function toggleSidebar() {
  return {
    type: TOGGLE_SIDEBAR
  };
}

export function resetSidebar() {
  return {
    type: RESET_SIDEBAR
  };
}
