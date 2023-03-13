const joi = require('joi');

module.exports = {
  createNew: joi.object({
    contentId: joi
      .number()
      .required(),
    data: joi
      .object()
      .required()
  }),

  param: joi.object({
    dataId: joi
      .number()
      .required()
  }),

  update: joi.object({
    contentId: joi
      .number()
      .required(),
    data: joi
      .object()
      .required()
  }),

  delete: joi.object({
    contentId: joi
      .number()
      .required()
  })
};
