import * as React from 'react'
import { Link } from 'react-router-dom'

import { withLayout } from '../Main'

import './styles.css'

const Admin = () => {
  return (
    <div className="root-container">
      <div className="shared-message-container">
        <div className="admin-links">
          <Link to="/admin/messages">Manage Messages</Link>
          <Link to="/admin/comments">Manage Comments</Link>
        </div>
      </div>
    </div>
  )
}

export default withLayout(Admin)
