//IMPORT EXPRESS ROUTER
const router = require('express').Router();
//IMPORT PATH (later)
//const path = require('path')

//IMPORT API ROUTES
const apiRoutes = require('./api');

//USE URL /api FOR API ROUTES
router.use('/api', apiRoutes);

//EXPORT ROUTER
module.exports = router;

