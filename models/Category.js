//IMPORT SEQUELIZE LIBRARY
const { Model, DataTypes } = require('sequelize');
//IMPORT DATABASE CONNECTION
const sequelize = require('../config/connection');

//EXTEND OFF SEQUELIZE MODEL CLASS (initialize Model)
class Category extends Model {}

//FIELDS FOR (Category)
Category.init(
    {
        //COLUMNS
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        category_name: {
          type: DataTypes.STRING,
          allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'category'
    }
);

module.exports = Category;