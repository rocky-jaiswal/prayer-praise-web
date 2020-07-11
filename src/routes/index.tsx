import AuthCallback from '../containers/AuthCallback'
import Root from '../containers/Root'
import EditMessage from '../containers/EditMessage'
import Me from '../containers/Me'
import Praise from '../containers/Praise'
import Prayer from '../containers/Prayer'

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
}

export default routes
