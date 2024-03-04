const express = require('express');
const passport = require('passport');

const router = express.Router();

router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

router.get(
  '/google/callback',
  passport.authenticate('google'),
  (request, response) => {
    response.json({ succcess: 'ok' });
  }
);

router.get('/logout', (request, response) => {
  request.logout();
  response.end();
});

module.exports = router;
