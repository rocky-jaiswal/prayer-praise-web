import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Auth0Provider } from '@auth0/auth0-react'

import App from './containers/App'
import Config from './config'
import { configureStore } from './store'
// import * as serviceWorker from './serviceWorker'

import './main.css'

const history = createBrowserHistory()
const store = configureStore(history)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Auth0Provider
        domain={Config.env.domain}
        clientId={Config.env.clientId}
        redirectUri={Config.env.redirectUri}
        audience={Config.env.audience}
      >
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Auth0Provider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
)

// serviceWorker.register()
