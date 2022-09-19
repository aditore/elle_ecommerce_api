//IMPORT SEQUELIZE LIBRARY
const { Model, DataTypes } = require('sequelize');
//IMPORT DATABASE CONNECTION
const sequelize = require('../config/connection');

//EXTEND OFF SEQUELIZE MODEL CLASS (initialize Model)
class ProductTag extends Model {}

//FIELDS FOR (ProductTag)
ProductTag.init(
    {
        //COLUMNS
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        product_id: {
          type: DataTypes.INTEGER,
          references: {
            model: 'product',
            key: 'id'
          }
        },
        tag_id: {
          type: DataTypes.INTEGER,
          references: {
            model: 'tag',
            key: 'id'
          }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'product_tag',
    }
);

module.exports = ProductTag;