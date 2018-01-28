import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import buildAuth0 from '../../lib/auth0';
import './styles.css';

interface Props {
  username?: string;
  profilePic?: string;
  jwtToken?: string;
  // tslint:disable-next-line:no-any
  auth0: any;
  logout(): void;
}

class User extends React.PureComponent<Props> {

  displayLoggedInUser() {
    return (
      <div className="userProfile">
        <img src={this.props.profilePic} alt={this.props.username} />
        <button onClick={this.props.logout}><FormattedMessage id="actions.logout" /></button>
      </div>
    );
  }

  displayLoggedOutUser() {
    return (
      <div className="userProfile">
        <button onClick={() => buildAuth0(this.props.auth0).authorize()}>
          <FormattedMessage id="actions.login" />
        </button>
      </div>
    );
  }

  render() {
    const isLoggedIn = this.props.jwtToken && this.props.username && this.props.profilePic;
    return isLoggedIn ? this.displayLoggedInUser() : this.displayLoggedOutUser();
  }

}

export default User;
