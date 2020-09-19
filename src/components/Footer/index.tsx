import * as React from 'react'
import { FormattedMessage } from 'react-intl'

import './styles.css'

const Footer = () => {
  return (
    <footer className="page-footer footer grey darken-1">
      <a href="https://berlin.church">
        <FormattedMessage id="components.Footer.main" />
      </a>
    </footer>
  )
}

export default Footer
