import * as React from 'react'

import { ActionType, SharedMessageType } from '../../constants/types'
import cleanString from '../../utils/cleanString'
import Badge from './Badge'
import './styles.css'

interface Props {
  message: SharedMessageType
  expand(id?: number): ActionType<number>
}

const ExpandedMessage = (props: Props) => {
  return (
    <div
      className="expanded-message"
      onClick={() => props.expand(props.message.id)}
    >
      <div className="top-section">
        <Badge messageType={props.message.messageType} />
        <div className="user-name">{props.message.username}</div>
      </div>
      <div className="expanded-message-text">
        {cleanString(props.message.messageText)}
      </div>
    </div>
  )
}

export default ExpandedMessage
