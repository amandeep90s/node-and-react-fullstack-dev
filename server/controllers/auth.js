const passport = require('passport');

const signUp = passport.authenticate('google', {
  scope: ['profile', 'email'],
});

const authCallback = (request, response) => {
  response.json({ succcess: 'ok' });
};

const logout = (request, response) => {
  request.logout();
  response.end();
};

const currentUser = (request, response) => {
  response.json(request.user);
};

module.exports = { signUp, authCallback, logout, currentUser };
