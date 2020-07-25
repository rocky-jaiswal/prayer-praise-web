import * as React from 'react'
import { FormattedMessage } from 'react-intl'

import './styles.css'

interface Props {
  message?: string
}

const DisplayMessage = (props: Props) => {
  return (
    <div className={props.message ? 'display-message' : 'hidden'}>
      <FormattedMessage id={props.message || 'message.blank'} />
    </div>
  )
}

export default DisplayMessage
