import * as React from 'react'

import { ActionType, SharedMessageType } from '../../constants/types'
import cleanString from '../../utils/cleanString'
import Badge from './Badge'
import './styles.css'

interface Props {
  message: SharedMessageType
  expand(id?: number): ActionType<number>
}

const MessageSummary = (props: Props) => {
  return (
    <div className={'message'} onClick={() => props.expand(props.message.id)}>
      <Badge messageType={props.message.messageType} />
      <div className={'messageText'}>
        {`${cleanString(props.message.messageText).substr(0, 20)} ...`}
      </div>
      <div className={'userInitials'}>{props.message.shortUsername}</div>
    </div>
  )
}

export default MessageSummary
