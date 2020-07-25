import * as React from 'react'
import { FormattedMessage } from 'react-intl'

import MessageSummary from './MessageSummary'
import FullMessage from './FullMessage'

import { SharedMessageType, ActionType } from '../../constants/types'
import './styles.css'

interface Props {
  messages: SharedMessageType[]
  selectedMessageId: number | null
  deleteMessage(payload: number): ActionType<number>
  unsetMessageToView(): ActionType<void>
  setMessageToView(id: number): ActionType<number>
  editMessage(id: number, payload: string): void
}

const MyMessages = (props: Props) => {
  const showSummaryOrFullMessage = (message: SharedMessageType) => {
    if (props.selectedMessageId === message.id) {
      return <FullMessage message={message} />
    }
    return <MessageSummary message={message} />
  }

  return (
    <div className="user-messages">
      {props.messages.map((message) => {
        return (
          <div
            className={
              props.selectedMessageId === message.id ? 'fullMessage' : 'message'
            }
            key={message.id}
          >
            {showSummaryOrFullMessage(message)}
            <div className="messageActions">
              <span className="shared-status">{message.sharedStatus}</span>
              <span>
                <button
                  className={'viewButton'}
                  onClick={
                    props.selectedMessageId === message.id
                      ? () => props.unsetMessageToView()
                      : () => props.setMessageToView(message.id)
                  }
                >
                  <FormattedMessage
                    id={
                      props.selectedMessageId === message.id
                        ? 'actions.collapse'
                        : 'actions.view'
                    }
                  />
                </button>
              </span>
              <span>
                <button
                  className={'editButton'}
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
                  className={'deleteButton'}
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
