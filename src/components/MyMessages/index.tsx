import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import { SharedMessageType, ActionType } from '../../constants/types';
import './styles.css';

interface Props {
  messages: SharedMessageType[];
  deleteMessage(payload: number): ActionType<number>;
  editMessage(id: number, payload: string): void;
}

class MyMessages extends React.PureComponent<Props> {

  render() {
    return (
      <div className="user-messages">
        {this.props.messages.map((message) => {
          return (
            <div className={'message'} key={message.id}>
              <span>{message.messageText.replace(/<[^>]*>/ig, ' ').substr(0, 20)}...</span>
              <span>
                <button
                  className={'editButton'}
                  onClick={() => this.props.editMessage(message.id, `/edit/messages/${message.id}`)}
                >
                  <FormattedMessage id="actions.edit" />
                </button>
              </span>
              <span>
                <button
                  className={'deleteButton'}
                  onClick={() => this.props.deleteMessage(message.id)}
                >
                  <FormattedMessage id="actions.delete" />
                </button>
              </span>
            </div>
          );
        })}
      </div>
    );
  }

}

export default MyMessages;
