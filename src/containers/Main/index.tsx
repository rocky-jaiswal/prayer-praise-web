import * as React from 'react';
import { connect } from 'react-redux';

import Layout from '../../components/Layout';
import { ActionType, RootStateType, Dispatch } from '../../constants/types';
import {
  fetchToken,
  fetchUserProfile,
  logout,
  resetSidebar,
  switchLanguage,
  toggleSidebar
} from '../App/actions';

import './styles.css';

interface StateProps {
  accessToken?: string;
  // tslint:disable-next-line:no-any
  auth0?: any;
  jwtToken?: string;
  username?: string;
  profilePic?: string;
  sidebarVisible: boolean;
}

interface DispatchProps {
  fetchToken(): ActionType<void>;
  fetchUserProfile(): ActionType<void>;
  logout(): ActionType<void>;
  switchLanguage(payload: string): ActionType<string>;
  resetSidebar(): ActionType<void>;
  toggleSidebar(): ActionType<void>;
}

// tslint:disable-next-line:no-any
function mapStateToProps(state: RootStateType, ownProps: any): StateProps {
  return {
    accessToken: state.app.accessToken,
    auth0: state.app.auth0,
    jwtToken: state.app.jwtToken,
    profilePic: state.app.profilePic,
    sidebarVisible: state.app.sidebarVisible,
    username: state.app.username,
    ...ownProps
  };
}

function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
  return {
    fetchToken: () => (dispatch(fetchToken())),
    fetchUserProfile: () => dispatch(fetchUserProfile()),
    logout: () => dispatch(logout()),
    resetSidebar: () => dispatch(resetSidebar()),
    switchLanguage: (payload: string) => dispatch(switchLanguage(payload)),
    toggleSidebar: () => dispatch(toggleSidebar())
  };
}

// tslint:disable-next-line:no-any
export const withUserProfile = (WrappedComponent: any) => {

  // tslint:disable-next-line:no-any
  class Main extends React.Component<any, never> {

    componentDidMount() {
      this.checkAuth(this.props);
      this.props.resetSidebar();
    }

    // tslint:disable-next-line:no-any
    componentWillReceiveProps(nextProps: any) {
      this.checkAuth(nextProps);
    }

    // tslint:disable-next-line:no-any
    checkAuth(props: any) {
      if (props.accessToken && !props.jwtToken) {
        this.props.fetchToken();
      }
      if (props.accessToken && props.jwtToken && !props.profilePic) {
        props.fetchUserProfile();
      }
    }

    render() {
      return (
        <Layout
          auth0={this.props.auth0}
          jwtToken={this.props.jwtToken}
          username={this.props.username}
          profilePic={this.props.profilePic}
          logout={this.props.logout}
          sidebarVisible={this.props.sidebarVisible}
          switchLanguage={this.props.switchLanguage}
          toggleSidebar={this.props.toggleSidebar}
        >
          <WrappedComponent match={this.props.match} />
        </Layout>
      );
    }

  }

  return connect(mapStateToProps, mapDispatchToProps)(Main);

};
