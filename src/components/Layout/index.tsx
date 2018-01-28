import * as React from 'react';

import { ActionType } from '../../constants/types';

import ExpandButton from '../ExpandButton';
import Footer from '../Footer';
import Header from '../Header';
import Sidebar from '../Sidebar';
import './styles.css';

interface Props {
  // tslint:disable-next-line:no-any
  auth0: any;
  username?: string;
  profilePic?: string;
  jwtToken?: string;
  children?: React.ReactElement<{}>;
  sidebarVisible: boolean;
  logout(): ActionType<void>;
  switchLanguage(payload: string): ActionType<string>;
  toggleSidebar(): ActionType<void>;
}

class Layout extends React.PureComponent<Props> {

  render() {
    return (
      <div className="main-container">
        <Header
          auth0={this.props.auth0}
          jwtToken={this.props.jwtToken}
          username={this.props.username}
          profilePic={this.props.profilePic}
          logout={this.props.logout}
          switchLanguage={this.props.switchLanguage}
        />
        <div className="page">
          <Sidebar
            loggedIn={!!this.props.jwtToken && !!this.props.profilePic}
            sidebarVisible={this.props.sidebarVisible}
          />
          <div className="main">
            {React.Children.toArray(this.props.children)}
          </div>
          <ExpandButton toggleSidebar={this.props.toggleSidebar}/>
        </div>
        <Footer />
      </div>
    );
  }

}

export default Layout;
