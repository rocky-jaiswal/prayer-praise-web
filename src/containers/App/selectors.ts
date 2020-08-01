import { AppStateType } from '../../constants/types'

export const isLoggedIn = (state: AppStateType) =>
  !!state.jwtToken && !!state.username && !!state.profilePic
