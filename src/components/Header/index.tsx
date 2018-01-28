import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import { ActionType } from '../../constants/types';
import User from '../User';
import './styles.css';

interface Props {
  username?: string;
  profilePic?: string;
  jwtToken?: string;
  // tslint:disable-next-line:no-any
  auth0: any;
  logout(): ActionType<void>;
  switchLanguage(payload: 'en' | 'de'): ActionType<string>;
}

class Header extends React.PureComponent<Props> {

  render() {
    return (
      <div className="heading">
        <h1>
          <Link to="/">
            <FormattedMessage id="components.Header.main" />
          </Link>
        </h1>
        <div className={'options'}>
          <button className={'language'} onClick={() => this.props.switchLanguage('en')}>EN</button>
          <button className={'language'} onClick={() => this.props.switchLanguage('de')}>DE</button>
          <User
            auth0={this.props.auth0}
            jwtToken={this.props.jwtToken}
            username={this.props.username}
            profilePic={this.props.profilePic}
            logout={this.props.logout}
          />
        </div>
      </div>
    );
  }

}

export default Header;
