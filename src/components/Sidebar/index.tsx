import * as React from 'react'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'

import './styles.css'

interface Props {
  sidebarVisible: boolean
  loggedIn: boolean
}

class Sidebar extends React.PureComponent<Props, {}> {
  render() {
    return (
      <div className={this.props.sidebarVisible ? 'sidebar' : 'visibleSidebar'}>
        <ul className={'sidelinks'}>
          <li>
            <Link to="/">
              <FormattedMessage id="component.Sidebar.homeLink" />
            </Link>
          </li>
          <li>
            <Link to="/prayer">
              <FormattedMessage id="component.Sidebar.prayerLink" />
            </Link>
          </li>
          <li>
            <Link to="/praise">
              <FormattedMessage id="component.Sidebar.praiseLink" />
            </Link>
          </li>
          {this.props.loggedIn ? (
            <li>
              <Link to="/me">
                <FormattedMessage id="component.Sidebar.meLink" />
              </Link>
            </li>
          ) : (
            <li />
          )}
        </ul>
      </div>
    )
  }
}

export default Sidebar
