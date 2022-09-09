//USE DOTENV TO ACCESS DATABASE
require('dotenv').config();
//CALL MYSQL2
const mysql = require('mysql2/promise');

//CALL ASYNC FUNCTION TO ADD DATABASE TO MYSQL
async function init() {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: process.env.DB_USER,
        password: process.env.DB_PW
    });

    //(drop database first -- if exists)
    await connection.query(`DROP DATABASE IF EXISTS shoppy_elle_db`);
    //(create database -- or refresh)
    await connection.query(`CREATE DATABASE shoppy_elle_db`);
    //LOOK IN CONSOLE TO SEE THAT FUNCTION RAN PROPERLY
    console.log(`DATABASE SETUP`);
}

init();