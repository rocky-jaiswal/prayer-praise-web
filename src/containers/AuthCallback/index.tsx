import * as React from 'react'
import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { push, RouterAction } from 'connected-react-router'
import { useAuth0 } from '@auth0/auth0-react'

import LoadingSpinner from '../../components/LoadingSpinner'
import { ActionType, Dispatch, RootStateType } from '../../constants/types'
import { login } from '../App/actions'

interface StateProps {
  jwtToken?: string | null
}

interface DispatchProps {
  login(arg: any): ActionType<any>
  changeRoute(route: string): RouterAction
}

function mapStateToProps(state: RootStateType): StateProps {
  return {
    jwtToken: state.app.jwtToken,
  }
}

function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
  return {
    changeRoute: (route) => dispatch(push(route)),
    login: (payload) => dispatch(login(payload)),
  }
}

const AuthCallback = (props: StateProps & DispatchProps) => {
  const { login, changeRoute, jwtToken } = props
  const [accessToken, setAccessToken] = useState('')
  const { getAccessTokenSilently } = useAuth0()

  useEffect(() => {
    async function waitForAccessToken() {
      const token = await getAccessTokenSilently()
      if (token !== '') {
        setAccessToken(token)
      }
    }
    waitForAccessToken()
  }, [accessToken, setAccessToken, getAccessTokenSilently])

  useEffect(() => {
    if (accessToken !== '') {
      login(accessToken)
    }
  }, [accessToken, login])

  useEffect(() => {
    if (jwtToken) {
      changeRoute('/')
    }
  }, [jwtToken, changeRoute])

  return (
    <div className="container">
      <LoadingSpinner />
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthCallback)
