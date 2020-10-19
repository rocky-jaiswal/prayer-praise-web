import * as React from 'react'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'

interface Props {
  loggedIn: boolean
  admin: boolean
}

const Tabbar = (props: Props) => {
  return (
    <div className="nav-content tabbar-color">
      <div className="container">
        <ul className="tabs tabs-transparent">
          <li className="tab" aria-label="home-link">
            <Link to="/">
              <FormattedMessage id="component.Sidebar.homeLink" />
            </Link>
          </li>
          <li className="tab">
            <Link to="/prayer" aria-label="add-prayer-link">
              <FormattedMessage id="component.Sidebar.prayerLink" />
            </Link>
          </li>
          <li className="tab">
            <Link to="/praise" aria-label="add-praise-link">
              <FormattedMessage id="component.Sidebar.praiseLink" />
            </Link>
          </li>
          {props.loggedIn ? (
            <li className="tab" aria-label="my-data-link">
              <Link to="/me">
                <FormattedMessage id="component.Sidebar.meLink" />
              </Link>
            </li>
          ) : (
            <li />
          )}
          {props.admin ? (
            <li className="tab">
              <Link to="/admin" aria-label="admin-link">
                <FormattedMessage id="component.Sidebar.adminLink" />
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
