const router = require('express').Router();
const helloWorldRoute = require('./helloWorld.route');

router.use('/', helloWorldRoute);

module.exports = router;