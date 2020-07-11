import * as React from 'react'
import { FormattedMessage } from 'react-intl'

import { ShareStatus } from '../../constants/enums'
import './styles.css'

interface Props {
  // loggedIn: boolean
  sharedStatus?: ShareStatus
  handleChangeShareStatus(status: ShareStatus): void
}

class SelectBar extends React.PureComponent<Props> {
  determineClass() {
    // if (!this.props.loggedIn) {
    //   return 'hidden'
    // }
    return this.props.sharedStatus === ShareStatus.SHARED_WITH_NOONE
      ? 'selected'
      : 'unselected'
  }

  render() {
    return (
      <div className={'selectbar'}>
        <div
          className={this.determineClass()}
          onClick={() =>
            this.props.handleChangeShareStatus(ShareStatus.SHARED_WITH_NOONE)
          }
        >
          <FormattedMessage id="share.options.noone" />
        </div>
        <div
          className={
            this.props.sharedStatus === ShareStatus.SHARED_WITH_PRAYER_TEAM
              ? 'selected'
              : 'unselected'
          }
          onClick={() =>
            this.props.handleChangeShareStatus(
              ShareStatus.SHARED_WITH_PRAYER_TEAM
            )
          }
        >
          <FormattedMessage id="share.options.prayerTeam" />
        </div>
        <div
          className={
            this.props.sharedStatus === ShareStatus.SHARED_WITH_EVERYONE
              ? 'selected'
              : 'unselected'
          }
          onClick={() =>
            this.props.handleChangeShareStatus(ShareStatus.SHARED_WITH_EVERYONE)
          }
        >
          <FormattedMessage id="share.options.everyone" />
        </div>
      </div>
    )
  }
}

export default SelectBar
