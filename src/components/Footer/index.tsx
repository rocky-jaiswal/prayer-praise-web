import * as React from 'react'
import { FormattedMessage } from 'react-intl'

import './styles.css'

const Footer = () => {
  return (
    <div className={'footer'}>
      <a href="https://berlin.church">
        <FormattedMessage id="components.Footer.main" />
      </a>
    </div>
  )
}

export default Footer
