const router = require('express').Router();
const contentTypeControllers = require('../../../controllers/content/contentType.controller');

// router.get('/', contentTypeControllers.getAllTypesControllerById);

router.post('/', contentTypeControllers.createContentTypeControllerById);

router.patch('/:typeId', contentTypeControllers.updateContentTypeControllerById);

router.delete('/:typeId', contentTypeControllers.deleteContentTypeControllerById);

module.exports = router;