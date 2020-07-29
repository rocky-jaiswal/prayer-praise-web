import * as React from 'react'
import { FormattedMessage } from 'react-intl'
import { useAuth0 } from '@auth0/auth0-react'

import './styles.css'

interface Props {
  username?: string
  profilePic?: string
}

const User = (props: Props) => {
  const { loginWithRedirect } = useAuth0()

  const displayLoggedInUser = () => {
    return (
      <div className="userProfile">
        <img src={props.profilePic} alt={props.username} />
        {/* TODO */}
        <button onClick={() => ({})}>
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

  const isLoggedIn = props.username && props.profilePic
  return isLoggedIn ? displayLoggedInUser() : displayLoggedOutUser()
}

export default User
