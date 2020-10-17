import * as React from 'react'

import { ActionType } from '../../constants/types'

import Footer from '../Footer'
import Header from '../Header'
import Sidebar from '../Sidebar'

import './styles.css'

interface Props {
  username?: string
  profilePic?: string
  children?: React.ReactElement<{}>
  sidebarVisible: boolean
  loggedIn: boolean
  admin: boolean
  switchLanguage(payload: string): ActionType<string>
  toggleSidebar(): ActionType<void>
  logout(): ActionType<void>
}

const Layout = (props: Props) => {
  return (
    <div>
      <Header loggedIn={props.loggedIn} admin={props.admin} />
      <div className="main">
        <div className="container custom">
          <div className="page">{props.children}</div>
          <Sidebar
            username={props.username}
            profilePic={props.profilePic}
            sidebarVisible={props.sidebarVisible}
            loggedIn={props.loggedIn}
            switchLanguage={props.switchLanguage}
            toggleSidebar={props.toggleSidebar}
            logout={props.logout}
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
