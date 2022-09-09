//USE DOTENV TO ACCESS DATABASE
require('dotenv').config();
//CALL FOR THE USE OF NPM PACKAGE SEQUELIZE
const Sequelize = require('sequelize');

//CREATE PROCESS TO CONNECT WITH MYSQL
const sequelize = process.env.JAWSDB_URL
    //TERNARY OPERATOR (if JAWSDB_URL is found then use, else use localhost)
    ? new Sequelize(process.env.JAWSDB_URL)
    : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: 'localhost',
        dialect: 'mysql',
        dialectOptions: {
            decimalNumbers: true,
        }
    });

//EXPORT CONNECTION
module.exports = sequelize;