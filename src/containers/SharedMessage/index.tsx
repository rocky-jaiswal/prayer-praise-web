import * as React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import { Immutable } from 'seamless-immutable'

import {
  ActionType,
  Dispatch,
  RootStateType,
  SharedMessageType,
} from '../../constants/types'
import { withLayout } from '../Main'
import { addComment, changeComment, fetchSharedMessage } from './actions'
import { incrementAgreements } from '../Root/actions'

import LoadingSpinner from '../../components/LoadingSpinner'
import ExpandedMessage from '../../components/MessageCards/ExpandedMessage'
import AddComment from '../../components/AddComment'
import CommentList from '../../components/CommentList'

import './styles.css'

interface StateProps {
  displayMessage?: string
  loading: boolean
  loadingComments: boolean
  newComment: string
  sharedMessage?: Immutable<SharedMessageType>
}

interface RouteParams {
  id: string
}

interface DispatchProps {
  fetchSharedMessage(id: string): ActionType<string>
  changeComment(comm: string): ActionType<string>
  addComment(): ActionType<void>
  incrementAgreements(id: number): ActionType<number>
}

type AppProps = StateProps & RouteComponentProps<RouteParams> & DispatchProps

function mapStateToProps(state: RootStateType): StateProps {
  return {
    displayMessage: state.sharedMessageDetails.displayMessage,
    loading: state.sharedMessageDetails.loading,
    loadingComments: state.sharedMessageDetails.loadingComments,
    newComment: state.sharedMessageDetails.newComment,
    sharedMessage: state.sharedMessageDetails.selectedSharedMessage,
  }
}

function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
  return {
    fetchSharedMessage: (id: string) => dispatch(fetchSharedMessage(id)),
    changeComment: (comm: string) => dispatch(changeComment(comm)),
    addComment: () => dispatch(addComment()),
    incrementAgreements: (payload: number) =>
      dispatch(incrementAgreements(payload)),
  }
}

const SharedMessage = (props: AppProps) => {
  const { fetchSharedMessage, match } = props

  useEffect(() => {
    fetchSharedMessage(match.params.id)
  }, [fetchSharedMessage, match])

  const showContent = () => {
    if (props.loading || !props.sharedMessage || !props.sharedMessage.id) {
      return <LoadingSpinner />
    } else {
      return (
        <>
          <ExpandedMessage
            message={props.sharedMessage!}
            key={props.sharedMessage!.id}
            hideCommentsLink={true}
            incrementAgreements={props.incrementAgreements}
          />
          <CommentList
            loadingComments={props.loadingComments}
            comments={props.sharedMessage!.comments}
          />
          <AddComment
            messageId={props.sharedMessage!.id}
            newComment={props.newComment}
            changeComment={props.changeComment}
            addComment={props.addComment}
          />
        </>
      )
    }
  }

  return (
    <div className="root-container">
      <div className="shared-message-container">{showContent()}</div>
    </div>
  )
}

export default withLayout(
  connect(mapStateToProps, mapDispatchToProps)(SharedMessage)
)
