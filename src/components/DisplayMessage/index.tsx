import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import './styles.css';

interface Props {
  message?: string;
}

class DisplayMessage extends React.PureComponent<Props> {

  render() {
    return (
      <div className={this.props.message ? 'display-message' : 'hidden'}>
        <FormattedMessage id={this.props.message || 'message.blank'} />
      </div>
    );
  }

}

export default DisplayMessage;
