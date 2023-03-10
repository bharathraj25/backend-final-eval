const router = require('express').Router();
const contentTypeControllers = require('../../../controllers/content/contentType.controller');
const { joiValidator } = require('../../../middlewares/joiValidation');
const contentTypeSchema = require('../../../schemas/contentType.schema');

// router.get('/', contentTypeControllers.getAllTypesControllerById);

router.post(
  '/',
  joiValidator(contentTypeSchema.update),
  contentTypeControllers.createContentTypeControllerById
);

router.patch(
  '/:typeId',
  joiValidator(contentTypeSchema.param, 'param'),
  joiValidator(contentTypeSchema.update),
  contentTypeControllers.updateContentTypeControllerById
);

router.delete(
  '/:typeId',
  joiValidator(contentTypeSchema.param, 'param'),
  joiValidator(contentTypeSchema.delete),
  contentTypeControllers.deleteContentTypeControllerById
);

module.exports = router;