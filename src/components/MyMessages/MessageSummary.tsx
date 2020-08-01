import * as React from 'react'

import { SharedMessageType } from '../../constants/types'
import './styles.css'

interface Props {
  message: SharedMessageType
}

const MessageSummary = (props: Props) => {
  return (
    <div className="messageText">
      {props.message.messageText.replace(/<[^>]*>/gi, ' ').substr(0, 20)}...
    </div>
  )
}

export default MessageSummary
