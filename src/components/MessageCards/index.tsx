import * as React from 'react'

import { ActionType, SharedMessageType } from '../../constants/types'
import ExpandedMessage from './ExpandedMessage'
import MessageSummary from './MessageSummary'
import './styles.css'

interface Props {
  expandedMessage?: number
  sharedMessages: SharedMessageType[]
  expand(id?: number): ActionType<number>
}

const MessageCards = (props: Props) => {
  return (
    <div className="messages">
      {props.sharedMessages.map((message) => {
        if (message.id === props.expandedMessage) {
          return (
            <ExpandedMessage
              message={message}
              expand={props.expand}
              key={message.id}
            />
          )
        }
        return (
          <MessageSummary
            message={message}
            expand={props.expand}
            key={message.id}
          />
        )
      })}
    </div>
  )
}

export default MessageCards
