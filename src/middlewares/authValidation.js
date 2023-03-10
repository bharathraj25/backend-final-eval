const { default: axios } = require('axios');
const { AUTH_URL } = require('../config');
const { HttpError } = require('../errors');

function authValidationMiddleware() {
  return async function (req, res, next) {
    try {
      const token = req.headers.authorization;
      if (token) {
        const requestDetails = {
          baseURL: AUTH_URL,
          url: 'api/auth/token/validate',
          method: 'post',
          headers: {
            authorization: token,
          },
        };
        const userData = await axios(requestDetails);
        req.email = userData.data.email;
      }
      else {
        throw new HttpError(401, 'Unauthorized - /"token/" is missing in header or invalid');
      }
      next();
    } catch (err) {
      next(err);
    }
  };
}

module.exports = {
  authValidationMiddleware,
};
