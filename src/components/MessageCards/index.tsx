import * as React from 'react';

import { ActionType, SharedMessageType } from '../../constants/types';
import ExpandedMessage from './ExpandedMessage';
import MessageSummary from './MessageSummary';
import './styles.css';

interface Props {
  expandedMessage?: number;
  sharedMessages: SharedMessageType[];
  expand(id?: number): ActionType<number>;
}

class MessageCards extends React.PureComponent<Props> {

  render() {
    return (
      <div className="messages">
        { this.props.sharedMessages.map((message) => {
          if (message.id === this.props.expandedMessage) {
            return <ExpandedMessage message={message} expand={this.props.expand} key={message.id} />;
          }
          return <MessageSummary message={message} expand={this.props.expand} key={message.id} />;
        }) }
      </div>
    );
  }

}

export default MessageCards;
