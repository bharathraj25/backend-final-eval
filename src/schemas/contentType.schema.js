

const joi = require('joi');

module.exports = {
  createNew: joi.object({
    contentId: joi
      .string()
      .required(),
    type: joi
      .object()
      .required()
  }),

  param: joi.object({
    typeId: joi
      .string()
      .required()
  }),

  update: joi.object({
    contentId: joi
      .string()
      .required(),
    type: joi
      .object()
      .required()
  }),

  delete: joi.object({
    contentId: joi
      .string()
      .required()
  })
};