const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieSession = require('cookie-session');
const passport = require('passport');
const config = require('./utils/config');
const authRoutes = require('./routes/authRoutes');
require('./services/passport');

mongoose.set('strictQuery', false);

// MongoDb Connection
mongoose
  .connect(config.MONGO_URI)
  .then(() => console.log('Connected to Database'))
  .catch((error) =>
    console.error(`Error connecting to Mongodb: ${error.message}`)
  );

// Configure Express Server
const app = express();

// Handle Request Body
app.use(express.json());

// Handle CORS
app.use(cors());

// Handle Cookies
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [config.COOKIE_SECRET],
  })
);

// Passport Initialization for Cookies
app.use(passport.initialize());

// Passport Session
app.use(passport.session());

// Handle Routes
app.use('/auth', authRoutes);

// Start Server
app.listen(config.SERVER_PORT, () => {
  console.log(`Server is running on http://localhost:${config.SERVER_PORT}`);
});
