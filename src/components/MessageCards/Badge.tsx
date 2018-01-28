import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import { PrayerPraise } from '../../constants/enums';

import './styles.css';

interface Props {
  messageType: PrayerPraise;
}

const Badge: React.SFC<Props> = (props) => {
  if (props.messageType === PrayerPraise.PRAISE) {
    return (
      <div className={'praiseBadge'}>
        <FormattedMessage id="components.Badge.praise" />
      </div>
    );
  }
  return (
    <div className={'prayerBadge'}>
      <FormattedMessage id="components.Badge.prayer" />
    </div>
  );
};

export default Badge;
