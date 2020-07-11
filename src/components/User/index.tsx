import * as React from 'react'
import { FormattedMessage } from 'react-intl'
import { useAuth0 } from '@auth0/auth0-react'

import './styles.css'

interface Props {}

const User = (_props: Props) => {
  const { loginWithRedirect } = useAuth0()

  const displayLoggedInUser = () => {
    return (
      <div className="userProfile">
        {/* <img src={this.props.profilePic} alt={this.props.username} /> */}
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

  const isLoggedIn = false
  return isLoggedIn ? displayLoggedInUser() : displayLoggedOutUser()
}

export default User
