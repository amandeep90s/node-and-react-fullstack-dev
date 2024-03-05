require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI;
const NODE_ENV = process.env.NODE_ENV;
const SERVER_PORT = process.env.SERVER_PORT;
const GOOGLE_CLIENT_ID = process.env.GOOGLE_OAUTH_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_OAUTH_CLIENT_SECRET;
const COOKIE_SECRET = process.env.COOKIE_SECRET_KEY;
const CLIENT_URL = process.env.CLIENT_URL;

module.exports = {
  MONGO_URI,
  NODE_ENV,
  SERVER_PORT,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  COOKIE_SECRET,
  CLIENT_URL,
};
