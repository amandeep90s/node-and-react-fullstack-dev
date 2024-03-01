require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;
const NODE_ENV = process.env.NODE_ENV;
const SERVER_PORT = process.env.SERVER_PORT;

module.exports = {
  MONGO_URI,
  NODE_ENV,
  SERVER_PORT,
};
