//IMPORT SEQUELIZE LIBRARY
const { Model, DataTypes } = require('sequelize');
//IMPORT DATABASE CONNECTION
const sequelize = require('../config/connection');

//EXTEND OFF SEQUELIZE MODEL CLASS (initialize Model)
class Category extends Model {}

//FIELDS FOR (Category)
Category.init({});

module.exports = Category;