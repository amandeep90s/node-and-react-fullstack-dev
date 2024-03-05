const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const config = require('../utils/config');
const User = require('../models/users');

// Configure Passport with Google strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: config.GOOGLE_CLIENT_ID,
      clientSecret: config.GOOGLE_CLIENT_SECRET,
      callbackURL: `${config.CLIENT_URL}/auth/google/callback`,
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const { id, displayName } = profile;
        let user = await User.findOne({ googleId: id });
        if (!user) {
          user = new User({
            googleId: id,
            name: displayName,
          });
          await user.save();
        }
        done(null, user);
      } catch (error) {
        console.error(error);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});
