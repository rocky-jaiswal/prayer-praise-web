import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';

import LoadingSpinner from '../../components/LoadingSpinner';
import SubmissionForm from '../../components/SubmissionForm';
import { PrayerPraise, ShareStatus } from '../../constants/enums';
import { ActionType, Dispatch, RootStateType } from '../../constants/types';
import { withUserProfile } from '../Main';
import {
  changeExistingMessageSharedStatus,
  changeExistingMessageText,
  editMessage,
  updateMessage
} from '../Me/actions';
import '../Me/styles.css';

interface StateProps {
  displayMessage?: string;
  messageForEditId?: number;
  messageForEditType: PrayerPraise;
  messageForEditSharedStatus?: ShareStatus;
  messageForEditText?: string;
  loading: boolean;
}

interface RouteParams {
  id: number;
}

interface DispatchProps {
  changeMessageText(payload: string): ActionType<string>;
  changeSharedStatus(payload: ShareStatus): ActionType<ShareStatus>;
  editMessage(payload: number): ActionType<number>;
  updateMessage(): ActionType<void>;
}

type IAppProps = StateProps & RouteComponentProps<RouteParams> & DispatchProps;

function mapStateToProps(state: RootStateType): StateProps {
  return {
    displayMessage: state.myData.displayMessage,
    loading: state.myData.loading,
    messageForEditId: state.myData.messageForEdit.id,
    messageForEditSharedStatus: state.myData.messageForEdit.sharedStatus,
    messageForEditText: state.myData.messageForEdit.text,
    messageForEditType: state.myData.messageForEdit.messageType || PrayerPraise.PRAISE
  };
}

function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
  return {
    changeMessageText: (payload: string) => dispatch(changeExistingMessageText(payload)),
    changeSharedStatus: (payload: ShareStatus) => dispatch(changeExistingMessageSharedStatus(payload)),
    editMessage: (payload) => dispatch(editMessage(payload)),
    updateMessage: () => dispatch(updateMessage())
  };
}

export class EditMessage extends React.Component<IAppProps, never> {

  componentDidMount() {
    this.props.editMessage(this.props.messageForEditId || this.props.match.params.id);
  }

  render() {
    if (this.props.loading || !this.props.messageForEditId) {
      return <LoadingSpinner />;
    }
    return (
      <div className="container">
        <SubmissionForm
          displayMessage={this.props.displayMessage}
          formType={this.props.messageForEditType}
          loggedIn={true}
          messageText={this.props.messageForEditText}
          sharedStatus={this.props.messageForEditSharedStatus}
          handleChangeMessageText={(text: string) => this.props.changeMessageText(text)}
          handleChangeShareStatus={(status: ShareStatus) => this.props.changeSharedStatus(status)}
          handleSubmit={() => this.props.updateMessage()}
        />
      </div>
    );
  }

}

export default withUserProfile(connect(mapStateToProps, mapDispatchToProps)(EditMessage));
