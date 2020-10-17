import * as React from 'react'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'

import Tabbar from '../Tabbar'

import './styles.css'

interface Props {
  loggedIn: boolean
  admin: boolean
}

const Header = (props: Props) => {
  return (
    <nav className="nav-extended">
      <div className="nav-wrapper nav-color">
        <div className="custom-logo">
          <Link to="/" className="brand-logo">
            <FormattedMessage id="components.Header.main" />
          </Link>
        </div>
      </div>
      <Tabbar loggedIn={props.loggedIn} admin={props.admin} />
    </nav>
  )
}

export default Header
