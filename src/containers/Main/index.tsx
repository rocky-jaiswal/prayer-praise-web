import * as React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'

import Layout from '../../components/Layout'

import { ActionType, RootStateType, Dispatch } from '../../constants/types'
import {
  resetSidebar,
  switchLanguage,
  toggleSidebar,
  fetchUserProfile,
  logout,
} from '../App/actions'
import { isLoggedIn } from '../App/selectors'

import './styles.css'

interface StateProps {
  jwtToken: string
  username?: string
  profilePic?: string
  sidebarVisible: boolean
  loggedIn: boolean
  children: any
  match: any
}

interface DispatchProps {
  switchLanguage(payload: string): ActionType<string>
  resetSidebar(): ActionType<void>
  toggleSidebar(): ActionType<void>
  fetchUserProfile(): ActionType<void>
  logout(): ActionType<void>
}

function mapStateToProps(state: RootStateType, ownProps: any): StateProps {
  return {
    jwtToken: state.app.jwtToken,
    username: state.app.username,
    profilePic: state.app.profilePic,
    sidebarVisible: state.app.sidebarVisible,
    loggedIn: isLoggedIn(state.app),
    ...ownProps,
  }
}

function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
  return {
    resetSidebar: () => dispatch(resetSidebar()),
    switchLanguage: (payload: string) => dispatch(switchLanguage(payload)),
    toggleSidebar: () => dispatch(toggleSidebar()),
    fetchUserProfile: () => dispatch(fetchUserProfile()),
    logout: () => dispatch(logout()),
  }
}

export const withLayout = (
  WrappedComponent: React.JSXElementConstructor<any>
) => {
  const MainHoc = (props: StateProps & DispatchProps) => {
    useEffect(() => {
      if (props.jwtToken) {
        props.fetchUserProfile()
      }
    }, [])

    return (
      <Layout
        username={props.username}
        profilePic={props.profilePic}
        sidebarVisible={props.sidebarVisible}
        switchLanguage={props.switchLanguage}
        toggleSidebar={props.toggleSidebar}
        loggedIn={props.loggedIn}
        logout={props.logout}
      >
        <WrappedComponent match={props.match} />
      </Layout>
    )
  }

  return connect(mapStateToProps, mapDispatchToProps)(MainHoc)
}
