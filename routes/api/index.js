//IMPORT EXPRESS ROUTER
const router = require('express').Router();
//CATEGORY
const categoryRoutes = require('./categoryRoutes');

//USE ROUTER
router.use('/category', categoryRoutes);

//EXPORT ROUTER
module.exports = router;