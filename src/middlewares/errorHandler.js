const joi = require('joi');
const sequelize = require('sequelize');

const { HttpError, NotFoundError } = require('../errors');

module.exports = {
  handleErrors(err, req, res, next) {
    console.log('Error >>>>', err);
    if (res.headersSent) {
      return next(err);
    }
    switch (err.constructor) {
    case joi.ValidationError:
    case sequelize.UniqueConstraintError:
    case sequelize.ValidationError: {
      return res.status(400).json({ message: err.message });
    }
    case NotFoundError: {
      return res.status(404).json({ message: err.message });
    }
    case HttpError: {
      return res.status(err.status).json({ message: err.message });
    }
    default: {
      return res.status(500).json({ message: 'Something unexpected happened' + err });
    }
    }
  }
};
