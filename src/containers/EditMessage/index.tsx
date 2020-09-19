import * as React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router'

import LoadingSpinner from '../../components/LoadingSpinner'
import SubmissionForm from '../../components/SubmissionForm'
import { PrayerPraise, ShareStatus } from '../../constants/enums'
import { ActionType, Dispatch, RootStateType } from '../../constants/types'
import { withLayout } from '../Main'
import {
  changeExistingMessageSharedStatus,
  changeExistingMessageText,
  editMessage,
  updateMessage,
} from '../Me/actions'
import { isLoggedIn } from '../App/selectors'
import '../Me/styles.css'

interface StateProps {
  displayMessage?: string
  messageForEditId?: number
  messageForEditType: PrayerPraise
  messageForEditSharedStatus?: ShareStatus
  messageForEditText?: string
  loading: boolean
  loggedIn: boolean
}

interface RouteParams {
  id: string
}

interface DispatchProps {
  changeMessageText(payload: string): ActionType<string>
  changeSharedStatus(payload: ShareStatus): ActionType<ShareStatus>
  editMessage(payload: number | string): ActionType<number | string>
  updateMessage(): ActionType<void>
}

type AppProps = StateProps & RouteComponentProps<RouteParams> & DispatchProps

function mapStateToProps(state: RootStateType): StateProps {
  return {
    displayMessage: state.myData.displayMessage,
    loading: state.myData.loading,
    messageForEditId: state.myData.messageForEdit.id,
    messageForEditSharedStatus: state.myData.messageForEdit.sharedStatus,
    messageForEditText: state.myData.messageForEdit.messageText,
    messageForEditType:
      state.myData.messageForEdit.messageType || PrayerPraise.PRAISE,
    loggedIn: isLoggedIn(state.app),
  }
}

function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
  return {
    changeMessageText: (payload: string) =>
      dispatch(changeExistingMessageText(payload)),
    changeSharedStatus: (payload: ShareStatus) =>
      dispatch(changeExistingMessageSharedStatus(payload)),
    editMessage: (payload) => dispatch(editMessage(payload)),
    updateMessage: () => dispatch(updateMessage()),
  }
}

const EditMessage = (props: AppProps) => {
  const { editMessage, messageForEditId, match } = props

  useEffect(() => {
    editMessage(messageForEditId || match.params.id)
  }, [editMessage, messageForEditId, match])

  if (props.loading || !props.messageForEditId || !props.messageForEditText) {
    return <LoadingSpinner />
  }

  return (
    <div className="container">
      <SubmissionForm
        displayMessage={props.displayMessage}
        formType={props.messageForEditType}
        loggedIn={props.loggedIn}
        messageText={props.messageForEditText}
        sharedStatus={props.messageForEditSharedStatus}
        handleChangeMessageText={(text: string) =>
          props.changeMessageText(text)
        }
        handleChangeShareStatus={(status: ShareStatus) =>
          props.changeSharedStatus(status)
        }
        handleSubmit={() => props.updateMessage()}
      />
    </div>
  )
}

export default withLayout(
  connect(mapStateToProps, mapDispatchToProps)(EditMessage)
)
