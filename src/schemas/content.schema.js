const joi = require('joi');

module.exports = {
  createNew: joi.object({
    contentName: joi
      .string()
      .required(),
  }),

  param: joi.object({
    contentId: joi
      .number()
      .required()
  }),

  update: joi.object({
    contentName: joi
      .string()
      .required()
  })
};
