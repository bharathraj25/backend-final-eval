const router = require('express').Router();
const contentDataControllers = require('../../../controllers/content/contentData.controller');


// router.get('/', contentDataControllers.getAllDatasControllerById);

router.post('/', contentDataControllers.createContentDataControllerById);

router.patch('/:dataId', contentDataControllers.updateContentDataControllerById);

router.delete('/:dataId', contentDataControllers.deleteContentDataControllerById);

module.exports = router;