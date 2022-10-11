//INCLUDE MODELS THAT WILL BE USED
const { Category, Product } = require('../../models');

//EXPORT FUNCTIONS FOR ROUTES
module.exports = {
    //GET ALL CATEGORIES
    async getAllCategories(req, res) {
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
    },
    //FIND ONE CATEGORY BY ID VALUE, INCLUDE PRODUCTS
    async findSingleCategory(req, res) {
        try {
            //VARIABLE TO HOLD SINGLE CATEGORY
            const singleCategory = await Category.findByPk(
                req.params.id,
                {
                    include: {
                        model: Product,
                        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
                    }
                }
            );
            //INTENDED RESPONSE
            res.status(200).json(singleCategory);
        } catch (err) {
            //ISSUE RESPONSE
            res.status(400).json(err);
        }
    },
    //CREATE NEW CATGEORY
    async createNewCategory(req, res) {
        try {
            //VARIABLE TO HOLD CREATED CATEGORY
            const newCategory = await Category.create({
                ...req.body
            });
            //INTENDED RESPONSE
            res.status(200).json(newCategory);
        } catch (err) {
            //ISSUE RESPONSE
            res.status(400).json(err);
        }
    }
    /* INCOMPLETE
    -UPDATE CATEGORY BY ID VALUE

    -DELETE CATEGORY BY ID VALUE
    */

}