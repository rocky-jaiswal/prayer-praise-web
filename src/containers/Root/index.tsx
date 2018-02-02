import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

import { ActionType, Dispatch, SharedMessageType, RootStateType } from '../../constants/types';
import { withUserProfile } from '../Main';
import { expandMessage, fetchSharedMessages, setPage } from './actions';

import DisplayMessage from '../../components/DisplayMessage';
import LoadingSpinner from '../../components/LoadingSpinner';
import MessageCards from '../../components/MessageCards';
import Paginator from '../../components/Paginator';

import './styles.css';

interface StateProps {
  displayMessage?: string;
  expandedMessage?: number;
  loading: boolean;
  sharedMessages: SharedMessageType[];
  currentPage: number;
  size: number;
  totalElements: number;
  totalPages: number;
}

interface DispatchProps {
  expandMessage(id?: number): ActionType<number>;
  setPage(page: number): ActionType<number>;
  fetchSharedMessages(): ActionType<void>;
}

const mapStateToProps = (state: RootStateType): StateProps => {
  return {
    displayMessage: state.sharedMessages.displayMessage,
    expandedMessage: state.sharedMessages.expandedMessage,
    loading: state.sharedMessages.loading,
    sharedMessages: state.sharedMessages.messages,
    currentPage: state.sharedMessages.currentPage,
    size: state.sharedMessages.size,
    totalElements: state.sharedMessages.totalElements,
    totalPages: state.sharedMessages.totalPages
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return {
    setPage: (page: number) => (dispatch(setPage(page))),
    expandMessage: (payload: number) => (dispatch(expandMessage(payload))),
    fetchSharedMessages: () => (dispatch(fetchSharedMessages()))
  };
};

export class Root extends React.Component<StateProps & DispatchProps> {

  componentDidMount() {
    this.props.fetchSharedMessages();
  }

  render() {
    if (this.props.loading ||
        !this.props.sharedMessages ||
        this.props.sharedMessages.length === 0) {
      return <LoadingSpinner />;
    }
    if (this.props.displayMessage) {
      return <DisplayMessage message={this.props.displayMessage} />;
    }
    return (
      <div className="root-container">
        <div className="root-heading">
          <h1><FormattedMessage id="container.Root.heading" /></h1>
          <button
            className="reload"
            onClick={() => this.props.fetchSharedMessages()}
          >
            ↻
          </button>
        </div>
        <Paginator
          currentPage={this.props.currentPage}
          totalPages={this.props.totalPages}
          fetchSharedMessages={(page) => {
              this.props.setPage(page);
              this.props.fetchSharedMessages();
            }
          }
        />
        <MessageCards
          expand={this.props.expandMessage}
          expandedMessage={this.props.expandedMessage}
          sharedMessages={this.props.sharedMessages}
        />
        <Paginator
          currentPage={this.props.currentPage}
          totalPages={this.props.totalPages}
          fetchSharedMessages={(page) => {
              this.props.setPage(page);
              this.props.fetchSharedMessages();
            }
          }
        />
      </div>
    );
  }

}

export default withUserProfile(connect(mapStateToProps, mapDispatchToProps)(Root));
