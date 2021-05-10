// REQUIRES
require('dotenv').config();
const massive = require('massive');
const express = require('express');

// CONTROLLERS
const cakeCtrl = require('./controller/cakeController')

// ENV VARIABLES
const {SERVER_PORT, CONNECTION_STRING} = process.env;

// SERVER INSTANCE
const app = express();

// MIDDLEWARE
app.use(express.json());

// DATABASE CONNECTION
massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized : false
    }
})
.then(db=>{
    app.set('db', db);
    console.log('DATABASE CONNECTED SUCCESSFULLY');
    app.listen(SERVER_PORT, ()=> console.log(`SERVER LISTENING TO PORT ${SERVER_PORT}.`))
})
.catch(err=>console.log('ISSUES CONNECTING TO DATABASE. ERROR: ' + err))

// ENDPOINTS 
app.get('/api/cakes', cakeCtrl.getCakes);
app.post('/api/cakes', cakeCtrl.addCake);
app.put('/api/cakes/:id', cakeCtrl.editCake);
app.delete('/api/cakes/:id', cakeCtrl.deleteCake);