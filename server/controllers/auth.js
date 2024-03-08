const passport = require('passport');

const signUp = passport.authenticate('google', {
  scope: ['profile', 'email'],
});

const authCallback = (request, response) => {
  response.redirect('/');
};

const logout = (request, response) => {
  request.logout();
  response.json({ status: 'ok' });
};

const currentUser = (request, response) => {
  response.json(request.user);
};

module.exports = { signUp, authCallback, logout, currentUser };
