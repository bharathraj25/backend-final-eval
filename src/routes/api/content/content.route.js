const router = require('express').Router();
const contentControllers = require('../../../controllers/content/content.controller');
const { joiValidator } = require('../../../middlewares/joiValidation');
const contentSchema = require('../../../schemas/content.schema');

router.get(
  '/',
  contentControllers.getAllContentsController
);

router.post(
  '/',
  joiValidator(contentSchema.createNew),
  contentControllers.createContentController
);

router.patch(
  '/:contentId',
  joiValidator(contentSchema.param, 'params'),
  joiValidator(contentSchema.update),
  contentControllers.updateContentController
);

// router.delete('/:contentId', contentControllers.deleteContentController);

module.exports = router;