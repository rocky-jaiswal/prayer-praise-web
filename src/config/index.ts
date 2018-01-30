const environmentConfiguration = (environment: string) => {

  const defaults = {
    baseURL: `http://${window.location.hostname}:3001`,
    callbackURL : `http://${window.location.hostname}:3000/authCallback`
  };

  if (environment === 'development') {
    return defaults;
  }
  if (environment === 'heroku') {
    return {
      baseURL: `https://prayer-praise-main-service.herokuapp.com`,
      callbackURL : `https://prayer-praise-web.herokuapp.com/authCallback`
    };
  }
  return defaults;
};

const Config = {
  env: environmentConfiguration(process.env.REACT_APP_APP_ENV || 'development')
};

export default Config;
