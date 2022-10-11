//PUT CONTROLLER FUNCTIONS IN INDEX TO MAKE EASIER TO CALL FOR ROUTES
const {
    //CATEGORY 
    getAllCategories,
    findSingleCategory, 
    createNewCategory 
} = require('./api');

//EXPORT ALL CONTROLLERS
module.exports = {
    //CATEGORY CONTROLLER
    getAllCategories,
    findSingleCategory,
    createNewCategory
}