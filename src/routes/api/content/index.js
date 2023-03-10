const router = require('express').Router();
const contentDataRoutes = require('./contentData.route');
const contentTypeRoutes = require('./contentType.route');
const contentRoutes = require('./content.route');

router.use('/', contentRoutes);
router.use('/data', contentDataRoutes);
router.use('/type', contentTypeRoutes);

module.exports = router;