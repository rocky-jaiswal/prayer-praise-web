import * as React from 'react';
import { Route, Switch } from 'react-router';

import routeList from '../../routes';
import LanguageProvider from '../LanguageProvider';

export class App extends React.Component<{}, never> {

  render() {
    return (
      <LanguageProvider>
        <Switch>
          <Route {...routeList.base} />
          <Route {...routeList.authCallback} />
          <Route {...routeList.editMessage} />
          <Route {...routeList.prayer} />
          <Route {...routeList.praise} />
          <Route {...routeList.me} />
        </Switch>
      </LanguageProvider>
    );
  }

}
