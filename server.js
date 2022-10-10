/*FILE CONNECTION*/
//CALL EXPRESS WEB FRAMEWORK
const express = require('express');
//DECLARE ROUTES
const routes = require('./routes');
//IMPORT MYSQL CONNECTION
const sequelize = require('./config/connection');

/*DECLARE VARIABLES*/
//USE EXPRESS WEB FRAMEWORK
const app = express();
//DECLARE PORT TO USE (use env port, or localhost 3001 -- will use what is available)
const PORT = process.env.PORT || 3001;

/*MIDDLEWARE*/
//ALLOW EXPRESS TO READ JSON
app.use(express.json());
//PARSE URLENCODED BODIES THAT MATCH Content-Type
app.use(express.urlencoded({ extended: true }));
//DECLARE USAGE OF ROUTES
app.use(routes);


/*SERVER*/
//(sync with sequelize first, then turn on server)
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`READY TO RUMBLE ON PORT ${PORT}`);
    });
});
