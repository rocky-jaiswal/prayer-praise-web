import * as React from 'react'
import { FormattedMessage } from 'react-intl'
import { useAuth0 } from '@auth0/auth0-react'

import { ActionType } from '../../constants/types'
import './styles.css'

interface Props {
  loggedIn: boolean
  username?: string
  profilePic?: string
  logout(): ActionType<void>
}

const User = (props: Props) => {
  const { loginWithRedirect } = useAuth0()

  const displayLoggedInUser = () => {
    return (
      <div className="userProfile">
        <img src={props.profilePic} alt={props.username} />
        <button onClick={() => props.logout()}>
          <FormattedMessage id="actions.logout" />
        </button>
      </div>
    )
  }

  const displayLoggedOutUser = () => {
    return (
      <div className="userProfile">
        <button onClick={() => loginWithRedirect()}>
          <FormattedMessage id="actions.login" />
        </button>
      </div>
    )
  }

  return props.loggedIn ? displayLoggedInUser() : displayLoggedOutUser()
}

export default User
