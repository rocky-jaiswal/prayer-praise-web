import * as React from 'react';
import * as Loadable from 'react-loadable';

import Layout from '../components/Layout';
import LoadingSpinner from '../components/LoadingSpinner';

const Loading = () => {
  return (
    <Layout
      auth0={{}}
      sidebarVisible={true}
      logout={() => ({ type: ''})}
      switchLanguage={() => ({ type: ''})}
      toggleSidebar={() => ({ type: ''})}
    >
      <LoadingSpinner />
    </Layout>
  );
};

const Root = Loadable({
  loader: () => import('../containers/Root'),
  loading: Loading,
});

const Prayer = Loadable({
  loader: () => import('../containers/Prayer'),
  loading: Loading,
});

const Praise = Loadable({
  loader: () => import('../containers/Praise'),
  loading: Loading,
});

const Me = Loadable({
  loader: () => import('../containers/Me'),
  loading: Loading,
});

const AuthCallback = Loadable({
  loader: () => import('../containers/AuthCallback'),
  loading: Loading,
});

const EditMessage = Loadable({
  loader: () => import('../containers/EditMessage'),
  loading: Loading,
});

interface RouteDefinition {
  exact: boolean;
  path: string;
  // tslint:disable-next-line:no-any
  component: any;
}

interface Routes {
  [propName: string]: RouteDefinition;
}

const routes: Routes = {
  authCallback: {
    component: AuthCallback,
    exact: true,
    path: '/authCallback'
  },
  base: {
    component: Root,
    exact: true,
    path: '/'
  },
  editMessage: {
    component: EditMessage,
    exact: true,
    path: '/edit/messages/:id'
  },
  me: {
    component: Me,
    exact: true,
    path: '/me'
  },
  praise: {
    component: Praise,
    exact: true,
    path: '/praise'
  },
  prayer: {
    component: Prayer,
    exact: true,
    path: '/prayer'
  }
};

export default routes;
