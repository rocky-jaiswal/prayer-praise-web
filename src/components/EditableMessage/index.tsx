import * as React from 'react'

import { MessageForEditType } from '../../constants/types'
import cleanString from '../../utils/cleanString'

import './styles.css'

interface Props {
  message: MessageForEditType
  deleteMessage: any
  updateMessage: any
}

const EditableMessage = (props: Props) => {
  const [editable, setEditable] = React.useState(false)
  const [messageText, setMessage] = React.useState(props.message.messageText)

  const showMessage = () => {
    if (editable) {
      return (
        <span className="edit-message-textarea">
          <textarea
            value={messageText}
            onChange={(e) => setMessage(e.currentTarget.value)}
          />
        </span>
      )
    }
    return <span className="edit-message-text">{messageText}</span>
  }

  return (
    <div className="edit-message">
      <span className="edit-message-type">{props.message.messageType}</span>
      {showMessage()}
      <span className="edit-message-actions">
        {editable ? (
          <button
            onClick={() => {
              setEditable(false)
              props.updateMessage({
                id: props.message.id,
                sharedStatus: props.message.sharedStatus,
                messageText: cleanString(messageText),
              })
            }}
          >
            Update
          </button>
        ) : (
          <button onClick={() => setEditable(!editable)}>Edit</button>
        )}

        <button
          onClick={() => {
            if (window.confirm('Are you sure?')) {
              props.deleteMessage(props.message.id)
            }
          }}
        >
          Delete
        </button>
      </span>
    </div>
  )
}

export default EditableMessage
