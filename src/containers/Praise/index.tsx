import * as React from 'react'
import { useEffect } from 'react'
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
} from './actions'
import { isLoggedIn } from '../App/selectors'

interface StateProps {
  displayMessage?: string
  loading: boolean
  loggedIn: boolean
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
    loggedIn: isLoggedIn(state.app),
    messageText: state.messages.messageText,
    sharedStatus: state.messages.sharedStatus,
  }
}

function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
  return {
    changeMessageText: (payload: string) =>
      dispatch(changeMessageText(payload)),
    changeMessageType: () => dispatch(changeMessageType(PrayerPraise.PRAISE)),
    changeSharedStatus: (payload: ShareStatus) =>
      dispatch(changeSharedStatus(payload)),
    clearDisplay: () => dispatch(clearDisplay()),
    submitMessage: () => dispatch(submitMessage()),
  }
}

type AppProps = StateProps & DispatchProps

const Praise = (props: AppProps) => {
  const { clearDisplay, changeMessageType } = props

  useEffect(() => {
    clearDisplay()
    changeMessageType()
  }, [clearDisplay, changeMessageType])

  if (props.loading) {
    return <LoadingSpinner />
  }

  return (
    <SubmissionForm
      displayMessage={props.displayMessage}
      formType={PrayerPraise.PRAISE}
      loggedIn={props.loggedIn}
      messageText={props.messageText}
      sharedStatus={props.sharedStatus}
      handleChangeMessageText={(text: string) => props.changeMessageText(text)}
      handleChangeShareStatus={(status: ShareStatus) =>
        props.changeSharedStatus(status)
      }
      handleSubmit={() => props.submitMessage()}
    />
  )
}

export default withLayout(connect(mapStateToProps, mapDispatchToProps)(Praise))
