//INCLUDE MODELS THAT WILL BE USED
const { Category, Product } = require('../../models');

//EXPORT FUNCTIONS FOR ROUTES
module.exports = {
    //GET ALL CATEGORIES
    async getALLCategories(req, res) {
        try {
            const allCategories = await Category.findAll({
                //INCLUDE PRODUCTS
                include: {
                    model: Product,
                    attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
                }
            });
            //INTENDED RESPONSE
            res.status(200).json(allCategories);
        } catch (err) {
            //ISSUE RESPONSE
            res.status(400).json(err);
        }
    }

    /* INCOMPLETE
    -FIND ONE CATEGORY BY ID VALUE, INCLUDE PRODUCTS

    -CREATE NEW CATGEORY

    -UPDATE CATEGORY BY ID VALUE

    -DELETE CATEGORY BY ID VALUE
    */

}