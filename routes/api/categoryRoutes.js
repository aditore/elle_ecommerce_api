//IMPORT EXPRESS ROUTER
const router = require('express').Router();

//IMPORT CATEGORY CONTROLLER
const {
    getAllCategories,
    findSingleCategory,
    createNewCategory,
    updateCategory,
    deleteCategory
} = require('../../controllers');

//URL FOR CATEGORY
router.route('/').get(getAllCategories).post(createNewCategory);
//URL FOR CATEGORY WITH ID
router.route('/:id').get(findSingleCategory).put(updateCategory).delete(deleteCategory);

module.exports = router;