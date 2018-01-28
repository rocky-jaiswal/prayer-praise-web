import { WebAuth } from 'auth0-js';
import { Auth0Params } from '../constants/types';

const buildAuth0 = (params: Auth0Params) => {
  const auth0 = new WebAuth({
    audience: params.audience,
    clientID: params.clientID,
    domain: params.domain,
    redirectUri: params.redirectUri,
    responseType: params.responseType,
    scope: params.scope
  });

  return auth0;
};

export default buildAuth0;
