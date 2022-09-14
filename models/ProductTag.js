//IMPORT SEQUELIZE LIBRARY
const { Model, DataTypes } = require('sequelize');
//IMPORT DATABASE CONNECTION
const sequelize = require('../config/connection');

//EXTEND OFF SEQUELIZE MODEL CLASS (initialize Model)
class ProductTag extends Model {}

//FIELDS FOR (ProductTag)
ProductTag.init({});

module.exports = ProductTag;