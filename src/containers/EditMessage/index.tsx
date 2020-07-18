import * as React from 'react'
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
import '../Me/styles.css'

interface StateProps {
  displayMessage?: string
  messageForEditId?: number
  messageForEditType: PrayerPraise
  messageForEditSharedStatus?: ShareStatus
  messageForEditText?: string
  loading: boolean
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
    messageForEditText: state.myData.messageForEdit.text,
    messageForEditType:
      state.myData.messageForEdit.messageType || PrayerPraise.PRAISE,
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
  // componentDidMount() {
  //   props.editMessage(
  //     props.messageForEditId || props.match.params.id
  //   )
  // }

  if (props.loading || !props.messageForEditId) {
    return <LoadingSpinner />
  }

  return (
    <div className="container">
      <SubmissionForm
        displayMessage={props.displayMessage}
        formType={props.messageForEditType}
        // loggedIn={true}
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
