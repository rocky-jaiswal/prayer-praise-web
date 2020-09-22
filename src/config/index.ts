const Config = {
  env: {
    baseURL: process.env.REACT_APP_BASE_URL,
    domain: process.env.REACT_APP_AUTH0_DOMAIN || 'example.com',
    clientId: process.env.REACT_APP_AUTH0_CLIENT_ID || 'changeme',
    redirectUri:
      process.env.REACT_APP_AUTH0_REDIRECT_URI ||
      `http://localhost:3000/authCallback`,
    audience: process.env.REACT_APP_AUTH0_AUDIENCE || 'example.com',
  },
}

export default Config
