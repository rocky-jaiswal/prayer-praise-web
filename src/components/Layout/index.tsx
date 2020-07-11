import * as React from 'react'

import { ActionType } from '../../constants/types'

import ExpandButton from '../ExpandButton'
import Footer from '../Footer'
import Header from '../Header'
import Sidebar from '../Sidebar'
import './styles.css'

interface Props {
  children?: React.ReactElement<{}>
  sidebarVisible: boolean
  switchLanguage(payload: string): ActionType<string>
  toggleSidebar(): ActionType<void>
}

const Layout = (props: Props) => {
  return (
    <div className="main-container">
      <Header switchLanguage={props.switchLanguage} />
      <div className="page">
        <Sidebar loggedIn={false} sidebarVisible={props.sidebarVisible} />
        <div className="main">{props.children}</div>
        <ExpandButton toggleSidebar={props.toggleSidebar} />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
