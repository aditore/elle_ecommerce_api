//IMPORT SEQUELIZE LIBRARY
const { Model, DataTypes } = require('sequelize');
//IMPORT DATABASE CONNECTION
const sequelize = require('../config/connection');

//EXTEND OFF SEQUELIZE MODEL CLASS (initialize Model)
class Product extends Model {}

//FIELDS FOR (Product)
Product.init(
    {
        //COLUMNS
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        product_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL(8,2),
            allowNull: false,
            validate: {
                isDecimal: true
            }
        },
        stock: {
            type: DataTypes.INTEGER,
            allownull: false,
            defaultValue: 1,
            validate: {
                isNumeric: true
            }
        },
        category_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'category',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'product'
    }
);

module.exports = Product;