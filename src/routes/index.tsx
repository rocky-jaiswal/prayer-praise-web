import AuthCallback from '../containers/AuthCallback'
import Root from '../containers/Root'
import EditMessage from '../containers/EditMessage'
import Me from '../containers/Me'
import Praise from '../containers/Praise'
import Prayer from '../containers/Prayer'
import SharedMessage from '../containers/SharedMessage'
import Admin from '../containers/Admin'
import AdminMessages from '../containers/Admin/AdminMessages'
import AdminComments from '../containers/Admin/AdminComments'

interface RouteDefinition {
  sequence: number
  exact: boolean
  path: string
  component: any
}

interface Routes {
  [propName: string]: RouteDefinition
}

const routes: Routes = {
  authCallback: {
    component: AuthCallback,
    exact: true,
    path: '/authCallback',
    sequence: 1,
  },
  base: {
    component: Root,
    exact: true,
    path: '/',
    sequence: 2,
  },
  editMessage: {
    component: EditMessage,
    exact: true,
    path: '/edit/messages/:id',
    sequence: 3,
  },
  me: {
    component: Me,
    exact: true,
    path: '/me',
    sequence: 4,
  },
  praise: {
    component: Praise,
    exact: true,
    path: '/praise',
    sequence: 5,
  },
  prayer: {
    component: Prayer,
    exact: true,
    path: '/prayer',
    sequence: 6,
  },
  sharedMessage: {
    component: SharedMessage,
    exact: true,
    path: '/shared/:id',
    sequence: 7,
  },
  admin: {
    component: Admin,
    exact: true,
    path: '/admin',
    sequence: 8,
  },
  adminMessages: {
    component: AdminMessages,
    exact: true,
    path: '/admin/messages',
    sequence: 9,
  },
  adminComments: {
    component: AdminComments,
    exact: true,
    path: '/admin/comments',
    sequence: 10,
  },
}

export default routes
