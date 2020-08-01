import * as React from 'react'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'

import { ActionType } from '../../constants/types'
import User from '../User'
import './styles.css'

interface Props {
  username?: string
  profilePic?: string
  loggedIn: boolean
  switchLanguage(payload: 'en' | 'de'): ActionType<string>
  logout(): ActionType<void>
}

const Header = (props: Props) => {
  return (
    <div className="heading">
      <h1>
        <Link to="/">
          <FormattedMessage id="components.Header.main" />
        </Link>
      </h1>
      <div className={'options'}>
        <button
          className={'language'}
          onClick={() => props.switchLanguage('en')}
        >
          EN
        </button>
        <button
          className={'language'}
          onClick={() => props.switchLanguage('de')}
        >
          DE
        </button>
        <User
          username={props.username}
          profilePic={props.profilePic}
          loggedIn={props.loggedIn}
          logout={props.logout}
        />
      </div>
    </div>
  )
}

export default Header
