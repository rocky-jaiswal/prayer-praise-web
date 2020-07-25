import * as React from 'react'

import { SharedMessageType } from '../../constants/types'
import './styles.css'

interface Props {
  message: SharedMessageType
}

const FullMessage = (props: Props) => {
  return (
    <div className="expandedMessageText">
      {props.message.messageText}
      <span className="userName">- {props.message.username}</span>
    </div>
  )
}

export default FullMessage
