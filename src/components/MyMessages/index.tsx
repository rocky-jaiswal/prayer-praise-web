import * as React from 'react'
import { FormattedMessage } from 'react-intl'

import { SharedMessageType, ActionType } from '../../constants/types'
import DisplayMessage from '../DisplayMessage'
import ExpandedMessage from '../MessageCards/ExpandedMessage'

import './styles.css'

interface Props {
  messages: SharedMessageType[]
  selectedMessageId: number | null
  displayMessage?: string
  deleteMessage(payload: number): ActionType<number>
  unsetMessageToView(): ActionType<void>
  setMessageToView(id: number): ActionType<number>
  editMessage(id: number, payload: string): void
}

const MyMessages = (props: Props) => {
  return (
    <div className="root-container">
      <DisplayMessage message={props.displayMessage} />
      {props.messages.map((message) => {
        return (
          <div className="my-message" key={message.id}>
            <ExpandedMessage
              message={message}
              expand={() => ({ type: 'noop', payload: 0 })}
            />
            <div className="message-actions">
              <span className="message-type">{message.messageType}</span>
              <span className="shared-status">{message.sharedStatus}</span>
              <span>
                <button
                  className="editButton"
                  onClick={() =>
                    props.editMessage(
                      message.id,
                      `/edit/messages/${message.id}`
                    )
                  }
                >
                  <FormattedMessage id="actions.edit" />
                </button>
              </span>
              <span>
                <button
                  className="deleteButton"
                  onClick={() => props.deleteMessage(message.id)}
                >
                  <FormattedMessage id="actions.delete" />
                </button>
              </span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default MyMessages
