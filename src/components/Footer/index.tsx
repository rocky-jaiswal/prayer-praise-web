import * as React from 'react'
import { FormattedMessage } from 'react-intl'

import './styles.css'

class Footer extends React.PureComponent {
  render() {
    return (
      <div className={'footer'}>
        <a href="https://berlin.church">
          <FormattedMessage id="components.Footer.main" />
        </a>
      </div>
    )
  }
}

export default Footer
