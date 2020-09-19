import * as React from 'react'
import { useEffect } from 'react'
import { FormattedMessage } from 'react-intl'
import { connect } from 'react-redux'

import {
  Dispatch,
  SharedMessageType,
  RootStateType,
  ActionType,
} from '../../constants/types'
import { withLayout } from '../Main'
import { expandMessage, fetchSharedMessages, setPage } from './actions'

import DisplayMessage from '../../components/DisplayMessage'
import ReloadAction from '../../components/ReloadAction'
import LoadingSpinner from '../../components/LoadingSpinner'
import MessageCards from '../../components/MessageCards'
import Paginator from '../../components/Paginator'

interface StateProps {
  displayMessage?: string
  expandedMessage?: number
  loading: boolean
  sharedMessages: SharedMessageType[]
  currentPage: number
  size: number
  totalElements: number
  totalPages: number
}

interface DispatchProps {
  fetchSharedMessages(): ActionType<void>
  expandMessage(id?: number): ActionType<number>
  setPage(page: number): ActionType<number>
}

const mapStateToProps = (state: RootStateType): StateProps => {
  return {
    displayMessage: state.sharedMessages.displayMessage,
    expandedMessage: state.sharedMessages.expandedMessage,
    loading: state.sharedMessages.loading,
    sharedMessages: state.sharedMessages.messages.asMutable(),
    currentPage: state.sharedMessages.currentPage,
    size: state.sharedMessages.size,
    totalElements: state.sharedMessages.totalElements,
    totalPages: state.sharedMessages.totalPages,
  }
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return {
    setPage: (page: number) => dispatch(setPage(page)),
    expandMessage: (payload: number) => dispatch(expandMessage(payload)),
    fetchSharedMessages: () => dispatch(fetchSharedMessages()),
  }
}

const Root = (props: StateProps & DispatchProps) => {
  const { fetchSharedMessages, setPage, expandMessage } = props

  const showPaginator = () => (
    <Paginator
      currentPage={props.currentPage}
      totalPages={props.totalPages}
      fetchSharedMessages={(page) => {
        setPage(page)
        fetchSharedMessages()
      }}
    />
  )

  const showContent = () => {
    if (
      props.loading ||
      !props.sharedMessages ||
      props.sharedMessages.length === 0
    ) {
      return <LoadingSpinner />
    } else {
      return (
        <div>
          <ReloadAction action={fetchSharedMessages} />
          {showPaginator()}
          <MessageCards
            expand={expandMessage}
            expandedMessage={props.expandedMessage}
            sharedMessages={props.sharedMessages}
          />
          {showPaginator()}
        </div>
      )
    }
  }

  useEffect(() => {
    fetchSharedMessages()
  }, [fetchSharedMessages])

  if (props.displayMessage) {
    return <DisplayMessage message={props.displayMessage} />
  }

  return (
    <div className="root-container">
      <div className="root-heading">
        <h3>
          <FormattedMessage id="container.Root.heading" />
        </h3>
      </div>
      {showContent()}
    </div>
  )
}

export default withLayout(connect(mapStateToProps, mapDispatchToProps)(Root))
