const router = require('express').Router();
const helloWorldRoute = require('./helloWorld.route');
const contentRoutes = require('./content');
const { handleErrors } = require('../../middlewares/errorHandler');

router.use('/', helloWorldRoute);
router.use('/content', contentRoutes);

router.use(handleErrors);
module.exports = router;