import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Auth0Provider } from '@auth0/auth0-react'

import App from './containers/App'
import { configureStore } from './store'
// import * as serviceWorker from './serviceWorker'

import './main.css'

const history = createBrowserHistory()
const store = configureStore(history)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Auth0Provider
        domain={process.env.REACT_APP_AUTH0_DOMAIN || 'example.com'}
        clientId={process.env.REACT_APP_AUTH0_CLIENT_ID || 'changeme'}
        redirectUri={`http://localhost:3000/authCallback`}
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
