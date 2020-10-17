import * as React from 'react'

import { Comment } from '../../constants/types'
import cleanString from '../../utils/cleanString'

interface Props {
  comment: Comment
  deleteComment: any
  updateComment: any
}

const EditableMessage = (props: Props) => {
  const [editable, setEditable] = React.useState(false)
  const [commentText, setMessage] = React.useState(props.comment.commentText)

  const showMessage = () => {
    if (editable) {
      return (
        <span className="edit-message-textarea">
          <textarea
            value={commentText}
            onChange={(e) => setMessage(e.currentTarget.value)}
          />
        </span>
      )
    }
    return <span className="edit-message-text">{commentText}</span>
  }

  return (
    <div className="edit-message">
      {showMessage()}
      <span className="edit-message-actions">
        {editable ? (
          <button
            onClick={() => {
              setEditable(false)
              props.updateComment({
                id: props.comment.id,
                commentText: cleanString(commentText),
              })
            }}
          >
            Update
          </button>
        ) : (
          <button onClick={() => setEditable(!editable)}>Edit</button>
        )}
        <button onClick={() => props.deleteComment(props.comment.id)}>
          Delete
        </button>
      </span>
    </div>
  )
}

export default EditableMessage
