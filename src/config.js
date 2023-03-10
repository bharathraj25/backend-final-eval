const PORT = process.env.SERVER_PORT || 3001;
const AUTH_URL = process.env.AUTH_URL || 'http://localhost:3002';

module.exports = {
  PORT,
  AUTH_URL
};