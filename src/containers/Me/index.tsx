import * as React from 'react'
import { useEffect } from 'react'
import { FormattedMessage } from 'react-intl'
import { connect } from 'react-redux'
import { push, RouterAction } from 'connected-react-router'

import LoadingSpinner from '../../components/LoadingSpinner'
import MyMessages from '../../components/MyMessages'
import {
  ActionType,
  Dispatch,
  RootStateType,
  SharedMessageType,
} from '../../constants/types'
import { withLayout } from '../Main'
import {
  deleteMessage,
  fetchMyMessages,
  setMessageToEdit,
  setMessageToView,
  unsetMessageToView,
} from './actions'
import { isLoggedIn } from '../App/selectors'

interface StateProps {
  loading: boolean
  loggedIn: boolean
  isAdmin: boolean
  displayMessage?: string
  selectedMessageId: number | null
  messages: SharedMessageType[]
}

interface DispatchProps {
  changeRoute(route: string): RouterAction
  deleteMessage(payload: number): ActionType<number>
  fetchMyMessages(): ActionType<void>
  unsetMessageToView(): ActionType<void>
  setMessageToView(payload: number): ActionType<number>
  setMessageToEdit(payload: number): ActionType<number>
}

function mapStateToProps(state: RootStateType): StateProps {
  return {
    loading: state.myData.loading,
    loggedIn: isLoggedIn(state.app),
    isAdmin: state.app.admin,
    displayMessage: state.myData.displayMessage,
    selectedMessageId: state.myData.selectedMessageId,
    messages: state.myData.myMessages.asMutable(),
  }
}

function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
  return {
    changeRoute: (route) => dispatch(push(route)),
    deleteMessage: (payload) => dispatch(deleteMessage(payload)),
    fetchMyMessages: () => dispatch(fetchMyMessages()),
    unsetMessageToView: () => dispatch(unsetMessageToView()),
    setMessageToView: (id: number) => dispatch(setMessageToView(id)),
    setMessageToEdit: (payload) => dispatch(setMessageToEdit(payload)),
  }
}

type AppProps = StateProps & DispatchProps

const Me = (props: AppProps) => {
  const { fetchMyMessages } = props

  useEffect(() => {
    fetchMyMessages()
  }, [fetchMyMessages])

  if (props.loading || !props.messages) {
    return <LoadingSpinner />
  }

  return (
    <div className="root-container">
      <h3>
        <FormattedMessage id="container.Me.heading" />
        {props.isAdmin ? ' (Admin*)' : ''}
      </h3>
      <MyMessages
        displayMessage={props.displayMessage}
        messages={props.messages}
        setMessageToView={props.setMessageToView}
        unsetMessageToView={props.unsetMessageToView}
        selectedMessageId={props.selectedMessageId}
        deleteMessage={props.deleteMessage}
        editMessage={(id: number, path: string) => {
          props.setMessageToEdit(id)
          props.changeRoute(path)
        }}
      />
    </div>
  )
}

export default withLayout(connect(mapStateToProps, mapDispatchToProps)(Me))
