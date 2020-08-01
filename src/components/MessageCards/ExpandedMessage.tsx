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
      className={'expandedMessage'}
      onClick={() => props.expand(props.message.id)}
    >
      <div className={'topSection'}>
        <Badge messageType={props.message.messageType} />
        <div className={'username'}>{props.message.username}</div>
      </div>
      <div className={'expandedMessageText'}>
        {cleanString(props.message.messageText)}
      </div>
    </div>
  )
}

export default ExpandedMessage
