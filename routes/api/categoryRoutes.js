//IMPORT EXPRESS ROUTER
const router = require('express').Router();

//IMPORT CATEGORY CONTROLLER
const {
    getAllCategories,
    createNewCategory
} = require('../../controllers');

//URL FOR CATEGORY
router.route('/').get(getAllCategories).post(createNewCategory);

module.exports = router;