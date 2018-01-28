import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

import { ActionType, Dispatch, SharedMessageType, RootStateType } from '../../constants/types';
import { withUserProfile } from '../Main';
import { expandMessage, fetchSharedMessages } from './actions';

import DisplayMessage from '../../components/DisplayMessage';
import LoadingSpinner from '../../components/LoadingSpinner';
import MessageCards from '../../components/MessageCards';

import './styles.css';

interface StateProps {
  displayMessage?: string;
  expandedMessage?: number;
  loading: boolean;
  sharedMessages: SharedMessageType[];
}

interface DispatchProps {
  expandMessage(id?: number): ActionType<number>;
  fetchSharedMessages(): ActionType<void>;
}

const mapStateToProps = (state: RootStateType): StateProps => {
  return {
    displayMessage: state.sharedMessages.displayMessage,
    expandedMessage: state.sharedMessages.expandedMessage,
    loading: state.sharedMessages.loading,
    sharedMessages: state.sharedMessages.messages
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return {
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
        <MessageCards
          expand={this.props.expandMessage}
          expandedMessage={this.props.expandedMessage}
          sharedMessages={this.props.sharedMessages}
        />
      </div>
    );
  }

}

export default withUserProfile(connect(mapStateToProps, mapDispatchToProps)(Root));
