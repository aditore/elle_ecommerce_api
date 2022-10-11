//IMPORT EXPRESS ROUTER
const router = require('express').Router();

//IMPORT CATEGORY CONTROLLER
const {
    getAllCategories,
    findSingleCategory,
    createNewCategory
} = require('../../controllers');

//URL FOR CATEGORY
router.route('/').get(getAllCategories).post(createNewCategory);
//URL FOR CATEGORY WITH ID
router.route('/:id').get(findSingleCategory);

module.exports = router;