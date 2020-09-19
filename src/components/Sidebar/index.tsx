import * as React from 'react'

import { ActionType } from '../../constants/types'
import ExpandButton from '../ExpandButton'
import User from '../User'

import './styles.css'

interface Props {
  username?: string
  profilePic?: string
  sidebarVisible: boolean
  loggedIn: boolean
  switchLanguage(payload: string): ActionType<string>
  toggleSidebar(): ActionType<void>
  logout(): ActionType<void>
}

const Sidebar = (props: Props) => {
  const showMenu = () => {
    if (props.sidebarVisible) {
      return (
        <div className="card app-menu-1">
          <p>Actions:</p>
          <div className="app-menu-2">
            <ul>
              <li>
                <button
                  className="app-language"
                  onClick={() => props.switchLanguage('en')}
                >
                  EN
                </button>
              </li>
              <li>
                <button
                  className="app-language"
                  onClick={() => props.switchLanguage('de')}
                >
                  DE
                </button>
              </li>
              <li>
                <User loggedIn={props.loggedIn} logout={props.logout} />
              </li>
            </ul>
          </div>
        </div>
      )
    }
    return null
  }

  return (
    <div>
      <div className="user-pic">
        {props.loggedIn && props.profilePic && (
          <img
            src={props.profilePic}
            alt={props.username}
            width="50px"
            height="50px"
            className="circle"
          />
        )}
      </div>
      <ExpandButton
        toggleSidebar={props.toggleSidebar}
        sidebarVisible={props.sidebarVisible}
      />
      {showMenu()}
    </div>
  )
}

export default Sidebar
