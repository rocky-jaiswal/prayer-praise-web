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
import EditableMessage from '../../components/EditableMessage'

import './styles.css'

const queryCache = new QueryCache()

const AdminMessages = () => {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <AdminView />
    </ReactQueryCacheProvider>
  )
}

const AdminView = () => {
  const cache = useQueryCache()

  const messagesQuery = useQuery('adminMessages', AppAPI.getAdminMessages)
  const [deleteMessage] = useMutation(AppAPI.deleteMessageForAdmin, {
    onSuccess: () => {
      cache.invalidateQueries('adminMessages')
    },
  })
  const [updateMessage] = useMutation(AppAPI.updateMessageForAdmin, {
    onSuccess: () => {
      cache.invalidateQueries('adminMessages')
    },
  })

  const showContent = () => {
    if (messagesQuery.data) {
      const messages: any = camelizeKeys(messagesQuery.data)
      return messages.data.map((m: any) => (
        <EditableMessage
          message={m}
          key={m.id}
          deleteMessage={deleteMessage}
          updateMessage={updateMessage}
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
          <h5>All Messages</h5>
        </div>
        {showContent()}
      </div>
    </div>
  )
}

export default withLayout(AdminMessages)
