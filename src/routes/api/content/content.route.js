const router = require('express').Router();
const contentControllers = require('../../../controllers/content/content.controller');


router.get('/', contentControllers.getAllContentsController);

router.post('/', contentControllers.createContentController);

router.patch('/:contentId', contentControllers.updateContentController);

router.delete('/:contentId', contentControllers.deleteContentController);

module.exports = router;