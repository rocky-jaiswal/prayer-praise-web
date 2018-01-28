import * as React from 'react';
import { connect } from 'react-redux';
import { push, RouterAction } from 'react-router-redux';

import LoadingSpinner from '../../components/LoadingSpinner';
import { ActionType, Dispatch, RootStateType } from '../../constants/types';
import { login } from '../App/actions';
import buildAuth0 from '../../lib/auth0';

import './styles.css';

interface StateProps {
  accessToken?: string | null;
  // tslint:disable-next-line:no-any
  auth0: any;
}

interface DispatchProps {
  // tslint:disable-next-line:no-any
  login(arg: any): ActionType<any>;
  changeRoute(route: string): RouterAction;
}

type AppProps = StateProps & DispatchProps;

export class AuthCallback extends React.Component<AppProps, never> {

  handleAuthentication() {
    // tslint:disable-next-line:no-any
    buildAuth0(this.props.auth0).parseHash((err: {}, authResult: any) => {
      if (err) {
        // tslint:disable-next-line:no-console
        console.error(err);
        return;
      }
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.props.login({
          accessToken: authResult.accessToken,
          idToken: authResult.idToken,
          tokenExpiresAt: JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime())
        });
      }
    });
  }

  componentDidMount() {
    this.handleAuthentication();
  }

  componentWillReceiveProps(nextProps: StateProps) {
    if (nextProps.accessToken) {
      this.props.changeRoute('/');
    }
  }

  render() {
    return (
      <div className="container">
        <LoadingSpinner />
      </div>
    );
  }
}

function mapStateToProps(state: RootStateType): StateProps {
  return {
    accessToken: state.app.accessToken,
    auth0: state.app.auth0
  };
}

function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
  return {
    changeRoute: (route) => dispatch(push(route)),
    login: (payload) => dispatch(login(payload))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthCallback);
