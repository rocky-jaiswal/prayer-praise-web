import * as React from 'react'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'

import './styles.css'

interface Props {
  loggedIn: boolean
}

const Tabbar = (props: Props) => {
  return (
    <div className="nav-content grey darken-1">
      <div className="container">
        <ul className="tabs tabs-transparent">
          <li className="tab">
            <Link to="/">
              <FormattedMessage id="component.Sidebar.homeLink" />
            </Link>
          </li>
          <li className="tab">
            <Link to="/prayer">
              <FormattedMessage id="component.Sidebar.prayerLink" />
            </Link>
          </li>
          <li className="tab">
            <Link to="/praise">
              <FormattedMessage id="component.Sidebar.praiseLink" />
            </Link>
          </li>
          {props.loggedIn ? (
            <li className="tab">
              <Link to="/me">
                <FormattedMessage id="component.Sidebar.meLink" />
              </Link>
            </li>
          ) : (
            <li />
          )}
        </ul>
      </div>
    </div>
  )
}

export default Tabbar
