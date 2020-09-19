import * as React from 'react'

import { ActionType } from '../../constants/types'
import { ReactComponent as HamburgerIcon } from './hamburger.svg'
import { ReactComponent as CloseIcon } from './closeIcon.svg'
import './styles.css'

interface Props {
  sidebarVisible: boolean
  toggleSidebar(): ActionType<void>
}

const ExpandButton = (props: Props) => {
  return (
    <div className="toggleButton" onClick={() => props.toggleSidebar()}>
      {props.sidebarVisible ? <CloseIcon /> : <HamburgerIcon />}
    </div>
  )
}

export default ExpandButton
