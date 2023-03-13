const router = require('express').Router();
const contentDataControllers = require('../../../controllers/content/contentData.controller');
const { joiValidator } = require('../../../middlewares/joiValidation');
const contentDataSchema = require('../../../schemas/contentData.schema');

// router.get('/', contentDataControllers.getAllDatasControllerById);

router.post(
  '/',
  joiValidator(contentDataSchema.createNew),
  contentDataControllers.createContentDataControllerById
);

router.patch(
  '/:dataId',
  joiValidator(contentDataSchema.param, 'params'),
  joiValidator(contentDataSchema.update),
  contentDataControllers.updateContentDataControllerById
);

router.delete(
  '/:dataId',
  joiValidator(contentDataSchema.param, 'params'),
  joiValidator(contentDataSchema.delete),
  contentDataControllers.deleteContentDataControllerById
);

module.exports = router;