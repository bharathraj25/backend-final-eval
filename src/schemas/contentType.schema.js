

const joi = require('joi');

module.exports = {
  createNew: joi.object({
    contentId: joi
      .number()
      .required(),
    type: joi
      .object()
      .required()
  }),

  param: joi.object({
    typeId: joi
      .number()
      .required()
  }),

  update: joi.object({
    contentId: joi
      .number()
      .required(),
    type: joi
      .object()
      .required()
  }),

  delete: joi.object({
    contentId: joi
      .number()
      .required()
  })
};
