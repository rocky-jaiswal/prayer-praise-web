import * as React from 'react'
import { FormattedMessage } from 'react-intl'

import { ShareStatus } from '../../constants/enums'
import './styles.css'

interface Props {
  loggedIn: boolean
  sharedStatus?: ShareStatus
  handleChangeShareStatus(status: ShareStatus): void
}

const SelectBar = (props: Props) => {
  const determineClass = () => {
    if (!props.loggedIn) {
      return 'hidden'
    }
    return props.sharedStatus === ShareStatus.SHARED_WITH_NOONE
      ? 'selected'
      : 'unselected'
  }

  return (
    <div className={'selectbar'}>
      <div
        className={determineClass()}
        onClick={() =>
          props.handleChangeShareStatus(ShareStatus.SHARED_WITH_NOONE)
        }
      >
        <FormattedMessage id="share.options.noone" />
      </div>
      <div
        className={
          props.sharedStatus === ShareStatus.SHARED_WITH_PRAYER_TEAM
            ? 'selected'
            : 'unselected'
        }
        onClick={() =>
          props.handleChangeShareStatus(ShareStatus.SHARED_WITH_PRAYER_TEAM)
        }
      >
        <FormattedMessage id="share.options.prayerTeam" />
      </div>
      <div
        className={
          props.sharedStatus === ShareStatus.SHARED_WITH_EVERYONE
            ? 'selected'
            : 'unselected'
        }
        onClick={() =>
          props.handleChangeShareStatus(ShareStatus.SHARED_WITH_EVERYONE)
        }
      >
        <FormattedMessage id="share.options.everyone" />
      </div>
    </div>
  )
}

export default SelectBar
