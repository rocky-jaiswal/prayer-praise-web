import * as React from 'react'
import { camelizeKeys } from 'humps'
import { Link } from 'react-router-dom'
import {
  useQuery,
  QueryCache,
  ReactQueryCacheProvider,
  useMutation,
  useQueryCache,
} from 'react-query'

import AppAPI from '../../api'
import { withLayout } from '../Main'

import LoadingSpinner from '../../components/LoadingSpinner'
import EditableComment from '../../components/EditableComment'

import './styles.css'

const queryCache = new QueryCache()

const AdminComments = () => {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <AdminView />
    </ReactQueryCacheProvider>
  )
}

const AdminView = () => {
  const cache = useQueryCache()

  const commentsQuery = useQuery('adminComments', AppAPI.getAdminComments)
  const [deleteComment] = useMutation(AppAPI.deleteCommentForAdmin, {
    onSuccess: () => {
      cache.invalidateQueries('adminComments')
    },
  })
  const [updateComment] = useMutation(AppAPI.updateCommentForAdmin, {
    onSuccess: () => {
      cache.invalidateQueries('adminComments')
    },
  })

  const showContent = () => {
    if (commentsQuery.data) {
      const comments: any = camelizeKeys(commentsQuery.data)
      return comments.data.map((comm: any) => (
        <EditableComment
          comment={comm}
          key={comm.id}
          deleteComment={deleteComment}
          updateComment={updateComment}
        />
      ))
    }
    return <LoadingSpinner />
  }

  return (
    <div className="root-container">
      <div className="shared-message-container">
        <div className="admin-head">
          <Link to="/admin">
            <span role="img" aria-label="back">
              ⬅️ Back
            </span>
          </Link>
          <h5>All Comments</h5>
        </div>
        {showContent()}
      </div>
    </div>
  )
}

export default withLayout(AdminComments)
