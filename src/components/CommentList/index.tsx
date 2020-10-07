import * as React from 'react'
import { ImmutableArray } from 'seamless-immutable'

import { Comment } from '../../constants/types'
import LoadingSpinner from '../LoadingSpinner'
import './styles.css'

interface Props {
  loadingComments: boolean
  comments: ImmutableArray<Comment>
}

const comments = (comments: ImmutableArray<Comment>) => {
  return comments.map((comm, idx) => {
    return (
      <div key={`${comm.id}`} className={`single-comment-${idx % 2}`}>
        <span>{comm.commentText}</span>
        <span className="user-name">{comm.username}</span>
      </div>
    )
  })
}

const CommentList = (props: Props) => {
  if (props.loadingComments) {
    return <LoadingSpinner />
  }

  return (
    <div className="comment-list">
      <h5>Comments</h5>
      {comments(props.comments)}
    </div>
  )
}

export default CommentList
