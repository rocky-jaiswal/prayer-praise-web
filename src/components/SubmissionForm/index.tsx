import * as React from 'react';
import * as ContentEditable from 'react-contenteditable';
import { FormattedMessage } from 'react-intl';

import { ActionType } from '../../constants/types';
import { PrayerPraise, ShareStatus } from '../../constants/enums';
import cleanString from '../../utils/cleanString';
import DisplayMessage from '../DisplayMessage';
import SelectBar from '../SelectBar';
import './styles.css';

interface Props {
  formType: PrayerPraise;
  displayMessage?: string;
  loggedIn: boolean;
  messageText?: string;
  sharedStatus?: ShareStatus;
  handleChangeMessageText(text: string): void;
  handleChangeShareStatus(status: ShareStatus): ActionType<ShareStatus>;
  handleSubmit(): ActionType<void>;
}

class SubmissionForm extends React.PureComponent<Props> {

  getMessage(formType: PrayerPraise) {
    return {
      [PrayerPraise.PRAISE]: <FormattedMessage id="component.FormHeading.Praise" />,
      [PrayerPraise.PRAYER]: <FormattedMessage id="component.FormHeading.Prayer" />
    }[formType];
  }

  // tslint:disable-next-line:no-any
  submitMessage(e: any) {
    e.preventDefault();
    if (this.props.messageText && this.props.messageText.trim().length !== 0) {
      this.props.handleSubmit();
    }
  }

  render() {
    return (
      <div className="formContainer">
        <h2>{this.getMessage(this.props.formType)}</h2>
        <div className={'info'}>
          {`${cleanString(this.props.messageText).length} / 500`}
          <FormattedMessage id="component.form.characters" />
        </div>
        <DisplayMessage message={this.props.displayMessage} />
        <ContentEditable
          className={'contentHolder'}
          // tslint:disable-next-line:no-any
          onChange={(evt: any) => this.props.handleChangeMessageText(evt.target.value)}
          html={this.props.messageText}
          disabled={false}
        />
        <SelectBar
          loggedIn={this.props.loggedIn}
          sharedStatus={this.props.sharedStatus}
          handleChangeShareStatus={(status: ShareStatus) => this.props.handleChangeShareStatus(status)}
        />
        <button
          disabled={cleanString(this.props.messageText).trim().length === 0 ||
            cleanString(this.props.messageText).length > 500}
          className={cleanString(this.props.messageText).trim().length === 0 ||
            cleanString(this.props.messageText).length > 500 ?
            'disabledButton' : 'submitButton'}
          onClick={(e) => this.submitMessage(e)}
        >
          <FormattedMessage id="actions.submit" />
        </button>
      </div>
    );
  }

}

export default SubmissionForm;
