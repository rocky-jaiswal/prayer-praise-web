import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { push, RouterAction } from 'react-router-redux';

import LoadingSpinner from '../../components/LoadingSpinner';
import MyMessages from '../../components/MyMessages';
import { ActionType, Dispatch, RootStateType, SharedMessageType } from '../../constants/types';
import { withUserProfile } from '../Main';
import { deleteMessage, fetchMyMessages, setMessageToEdit, setMessageToView, unsetMessageToView } from './actions';
import './styles.css';

interface StateProps {
  loading: boolean;
  loggedIn: boolean;
  isAdmin: boolean;
  selectedMessageId: number | null;
  messages: SharedMessageType[];
}

interface DispatchProps {
  changeRoute(route: string): RouterAction;
  deleteMessage(payload: number): ActionType<number>;
  fetchMyMessages(): ActionType<void>;
  unsetMessageToView(): ActionType<void>;
  setMessageToView(payload: number): ActionType<number>;
  setMessageToEdit(payload: number): ActionType<number>;
}

function mapStateToProps(state: RootStateType): StateProps {
  return {
    loading: state.myData.loading,
    loggedIn: !!state.app.jwtToken,
    isAdmin: state.app.admin,
    selectedMessageId: state.myData.selectedMessageId,
    messages: state.myData.myMessages
  };
}

function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
  return {
    changeRoute: (route) => dispatch(push(route)),
    deleteMessage: (payload) => dispatch(deleteMessage(payload)),
    fetchMyMessages: () => dispatch(fetchMyMessages()),
    unsetMessageToView: () => dispatch(unsetMessageToView()),
    setMessageToView: (id: number) => dispatch(setMessageToView(id)),
    setMessageToEdit: (payload) => dispatch(setMessageToEdit(payload))
  };
}

type AppProps = StateProps & DispatchProps;

export class Me extends React.Component<AppProps, never> {

  componentDidMount() {
    this.props.fetchMyMessages();
  }

  componentWillReceiveProps(nextProps: StateProps) {
    if (!nextProps.loggedIn) {
      this.props.changeRoute('/');
    }
  }

  render() {
    if (this.props.loading || !this.props.messages) {
      return <LoadingSpinner />;
    }
    return (
      <div className="container">
        <h2><FormattedMessage id="container.Me.heading" />{this.props.isAdmin ? ' (Admin*)' : ''}</h2>
        <MyMessages
          messages={this.props.messages}
          setMessageToView={this.props.setMessageToView}
          unsetMessageToView={this.props.unsetMessageToView}
          selectedMessageId={this.props.selectedMessageId}
          deleteMessage={this.props.deleteMessage}
          editMessage={ (id: number, path: string) => {
            this.props.setMessageToEdit(id);
            this.props.changeRoute(path);
          }}
        />
      </div>
    );
  }

}

export default withUserProfile(connect(mapStateToProps, mapDispatchToProps)(Me));
