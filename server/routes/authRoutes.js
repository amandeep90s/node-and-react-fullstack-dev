const express = require('express');
const passport = require('passport');
const authController = require('../controllers/auth');

const router = express.Router();

router.get('/google', authController.signUp);

router.get(
  '/google/callback',
  passport.authenticate('google'),
  authController.authCallback
);

router.get('/logout', authController.logout);

router.get('/current/user', authController.currentUser);

module.exports = router;
