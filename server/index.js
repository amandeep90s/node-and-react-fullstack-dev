const express = require('express');
const cors = require('cors');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const config = require('./utils/config');

const app = express();

app.use(express.json());
app.use(cors());

passport.use(
  new GoogleStrategy(
    {
      clientId: config.GOOGLE_CLIENT_ID,
      clientSecret: config.GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback',
    },
    (accessToken) => {
      console.log(accessToken);
    }
  )
);

app.listen(config.SERVER_PORT, () => {
  console.log(`Server is running on http://localhost:${config.SERVER_PORT}`);
});
