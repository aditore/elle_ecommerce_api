//IMPORT MODELS
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

//(Product) BELONGS TO (Category)
Product.belongsTo(Category, {
    foreignKey: 'category_id'
});
  
//(Category) HAS MANY (Product)
Category.hasMany(Product, {
  foreignKey: 'category_id'
});

//(Product) BELONGS TO MANY (Tag) THROUGH (ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id'
});

//(Tag) BELONGS TO MANY (Products) THROUGH (ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};