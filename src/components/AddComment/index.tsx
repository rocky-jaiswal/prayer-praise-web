import * as React from 'react'

import { ActionType } from '../../constants/types'

import './styles.css'

interface Props {
  messageId: string | number
  newComment: string
  changeComment(comm: string): ActionType<string>
  addComment(): ActionType<void>
}

const AddComment = (props: Props) => {
  return (
    <form className="add-comment">
      <div className="row">
        <p>Add Comment:</p>
        <div className="input-field">
          <textarea
            className="materialize-textarea"
            data-length="120"
            max-length="120"
            onChange={(e) => props.changeComment(e.currentTarget.value)}
            value={props.newComment}
          ></textarea>
          <button
            onClick={(e) => {
              e.preventDefault()
              props.addComment()
            }}
          >
            Add
          </button>
        </div>
      </div>
    </form>
  )
}

export default AddComment
