import * as React from 'react';

import { ActionType } from '../../constants/types';
import './styles.css';

interface Props {
  toggleSidebar(): ActionType<void>;
}

const ExpandButton: React.SFC<Props> = (props) => {
  return (
    <div className={'toggleButton'} onClick={() => props.toggleSidebar()}>
      <div className={'wrapper'}>
        <div className={'menuTop'} />
        <div className={'menuMiddle'} />
        <div className={'menuBottom'} />
      </div>
    </div>
  );
};

export default ExpandButton;
