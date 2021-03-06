import * as React from 'react'
import { FormattedMessage } from 'react-intl'

interface Props {
  message?: string | null
}

const DisplayMessage = (props: Props) => {
  return (
    <div className={props.message ? 'display-message' : 'hidden'}>
      <FormattedMessage id={props.message || 'message.blank'} />
    </div>
  )
}

export default DisplayMessage
