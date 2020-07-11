import * as React from 'react'
import { connect } from 'react-redux'
import { push, RouterAction } from 'connected-react-router'

import LoadingSpinner from '../../components/LoadingSpinner'
import { ActionType, Dispatch, RootStateType } from '../../constants/types'
import { login } from '../App/actions'

import './styles.css'

interface StateProps {
  // accessToken?: string | null
  // auth0: any
}

interface DispatchProps {
  login(arg: any): ActionType<any>
  changeRoute(route: string): RouterAction
}

function mapStateToProps(_state: RootStateType): StateProps {
  return {
    // accessToken: state.app.accessToken,
    // auth0: state.app.auth0,
  }
}

function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
  return {
    changeRoute: (route) => dispatch(push(route)),
    login: (payload) => dispatch(login(payload)),
  }
}

export class AuthCallback extends React.Component<StateProps & DispatchProps> {
  // handleAuthentication() {
  //   buildAuth0(this.props.auth0).parseHash((err: {}, authResult: any) => {
  //     if (err) {
  //       console.error(err)
  //       return
  //     }
  //     if (authResult && authResult.accessToken && authResult.idToken) {
  //       this.props.login({
  //         accessToken: authResult.accessToken,
  //         idToken: authResult.idToken,
  //         tokenExpiresAt: JSON.stringify(
  //           authResult.expiresIn * 1000 + new Date().getTime()
  //         ),
  //       })
  //     }
  //   })
  // }

  // componentDidMount() {
  //   this.handleAuthentication()
  // }

  // componentWillReceiveProps(nextProps: StateProps) {
  //   if (nextProps.accessToken) {
  //     this.props.changeRoute('/')
  //   }
  // }

  render() {
    return (
      <div className="container">
        <LoadingSpinner />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthCallback)
