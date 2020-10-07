import * as React from 'react'
import { ImmutableObject } from 'seamless-immutable'

import { ActionType, SharedMessageType } from '../../constants/types'
import cleanString from '../../utils/cleanString'
import Badge from './Badge'
import './styles.css'

interface Props {
  message: ImmutableObject<SharedMessageType>
  expand(id?: number): ActionType<number>
}

const MessageSummary = (props: Props) => {
  return (
    <div className="message" onClick={() => props.expand(props.message.id)}>
      <Badge messageType={props.message.messageType} />
      <div className="message-text">
        {`${cleanString(props.message.messageText)}`}
      </div>
      <div className="user-name">{props.message.username}</div>
    </div>
  )
}

export default MessageSummary
