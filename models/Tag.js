//IMPORT SEQUELIZE LIBRARY
const { Model, DataTypes } = require('sequelize');
//IMPORT DATABASE CONNECTION
const sequelize = require('../config/connection');

//EXTEND OFF SEQUELIZE MODEL CLASS (initialize Model)
class Tag extends Model {}

//FIELDS FOR (Tag)
Tag.init(
    {
        //COLUMNS
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        tag_name: {
          type: DataTypes.STRING
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'tag',
    }
);

module.exports = Tag;