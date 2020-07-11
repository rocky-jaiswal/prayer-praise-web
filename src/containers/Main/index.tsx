import * as React from 'react'
import { connect } from 'react-redux'

import Layout from '../../components/Layout'

import { ActionType, RootStateType, Dispatch } from '../../constants/types'
import { resetSidebar, switchLanguage, toggleSidebar } from '../App/actions'

import './styles.css'

interface StateProps {
  sidebarVisible: boolean
  children: any
  match: any
}

interface DispatchProps {
  switchLanguage(payload: string): ActionType<string>
  resetSidebar(): ActionType<void>
  toggleSidebar(): ActionType<void>
}

function mapStateToProps(state: RootStateType, ownProps: any): StateProps {
  return {
    sidebarVisible: state.app.sidebarVisible,
    ...ownProps,
  }
}

function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
  return {
    resetSidebar: () => dispatch(resetSidebar()),
    switchLanguage: (payload: string) => dispatch(switchLanguage(payload)),
    toggleSidebar: () => dispatch(toggleSidebar()),
  }
}

export const withLayout = (
  WrappedComponent: React.JSXElementConstructor<any>
) => {
  const MainHoc = (props: StateProps & DispatchProps) => {
    return (
      <Layout
        sidebarVisible={props.sidebarVisible}
        switchLanguage={props.switchLanguage}
        toggleSidebar={props.toggleSidebar}
      >
        <WrappedComponent match={props.match} />
      </Layout>
    )
  }

  return connect(mapStateToProps, mapDispatchToProps)(MainHoc)
}
