const joi = require('joi');

module.exports = {
  createNew: joi.object({
    contentId: joi
      .string()
      .required(),
    data: joi
      .object()
      .required()
  }),

  param: joi.object({
    dataId: joi
      .string()
      .required()
  }),

  update: joi.object({
    contentId: joi
      .string()
      .required(),
    data: joi
      .object()
      .required()
  }),

  delete: joi.object({
    contentId: joi
      .string()
      .required()
  })
};