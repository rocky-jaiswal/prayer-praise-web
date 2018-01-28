import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import './styles.css';

class Footer extends React.PureComponent {

  render() {
    return (
      <div className={'footer'}>
        <FormattedMessage id="components.Footer.main" />
      </div>
    );
  }

}

export default Footer;
