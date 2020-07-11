import * as React from 'react'
import { connect } from 'react-redux'

import LoadingSpinner from '../../components/LoadingSpinner'
import SubmissionForm from '../../components/SubmissionForm'
import { PrayerPraise, ShareStatus } from '../../constants/enums'
import { ActionType, Dispatch, RootStateType } from '../../constants/types'
import { withLayout } from '../Main'
import {
  changeMessageText,
  changeMessageType,
  changeSharedStatus,
  clearDisplay,
  submitMessage,
} from '../Praise/actions'

interface StateProps {
  displayMessage?: string
  loading: boolean
  // loggedIn: boolean
  messageText: string
  sharedStatus: ShareStatus
}

interface DispatchProps {
  changeMessageText(payload: string): ActionType<string>
  changeSharedStatus(payload: ShareStatus): ActionType<ShareStatus>
  clearDisplay(): ActionType<void>
  submitMessage(): ActionType<void>
  changeMessageType(): ActionType<PrayerPraise>
}

function mapStateToProps(state: RootStateType): StateProps {
  return {
    displayMessage: state.messages.displayMessage,
    loading: state.messages.loading,
    // loggedIn: !!state.app.jwtToken && !!state.app.username,
    messageText: state.messages.messageText,
    sharedStatus: state.messages.sharedStatus,
  }
}

function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
  return {
    changeMessageText: (payload: string) =>
      dispatch(changeMessageText(payload)),
    changeMessageType: () => dispatch(changeMessageType(PrayerPraise.PRAYER)),
    changeSharedStatus: (payload: ShareStatus) =>
      dispatch(changeSharedStatus(payload)),
    clearDisplay: () => dispatch(clearDisplay()),
    submitMessage: () => dispatch(submitMessage()),
  }
}

type IAppProps = StateProps & DispatchProps

export class Prayer extends React.Component<IAppProps, never> {
  componentDidMount() {
    this.props.clearDisplay()
    this.props.changeMessageType()
  }

  render() {
    if (this.props.loading) {
      return <LoadingSpinner />
    }
    return (
      <SubmissionForm
        displayMessage={this.props.displayMessage}
        formType={PrayerPraise.PRAYER}
        // loggedIn={this.props.loggedIn}
        messageText={this.props.messageText}
        sharedStatus={this.props.sharedStatus}
        handleChangeMessageText={(text: string) =>
          this.props.changeMessageText(text)
        }
        handleChangeShareStatus={(status: ShareStatus) =>
          this.props.changeSharedStatus(status)
        }
        handleSubmit={() => this.props.submitMessage()}
      />
    )
  }
}

export default withLayout(connect(mapStateToProps, mapDispatchToProps)(Prayer))
