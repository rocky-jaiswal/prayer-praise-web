import * as React from 'react'
import { FormattedMessage } from 'react-intl'

import { PrayerPraise } from '../../constants/enums'

import './styles.css'

interface Props {
  messageType: PrayerPraise
}

const Badge = (props: Props) => {
  if (props.messageType === PrayerPraise.PRAISE) {
    return (
      <div className="praise-badge">
        <FormattedMessage id="components.Badge.praise" />
      </div>
    )
  }
  return (
    <div className="prayer-badge">
      <FormattedMessage id="components.Badge.prayer" />
    </div>
  )
}

export default Badge
