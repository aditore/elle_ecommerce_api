//PUT CONTROLLER FUNCTIONS IN INDEX TO MAKE EASIER TO CALL FOR ROUTES
const {
    getAllCategories, 
    createNewCategory 
} = require('./categoryController');
const { }= require('./productController');
const { } = require('./tagController');


//EXPORT CONTROLLERS FOR API
module.exports = {
    //CATEGORY CONTROLLER
    getAllCategories,
    createNewCategory
}