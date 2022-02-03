// Modules =========================================================
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
var mongoose = require('mongoose');
require('dotenv').config();

var corsOptions = {
   origin: 'http://localhost:4200',
   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}
// set our port =========================================================
const port = 8000;

// config files =========================================================
var db = require('./config/db');
mongoose.connect(db.url);

// set Express =========================================================
const app = express()
app.use(cors(corsOptions))
app.use(bodyParser.json())

// frontend routes =========================================================
var appRoutes = require('./app/routes/user');
app.use('/api', appRoutes);


// startup our app at http://localhost:3000 =========================================================
app.listen(port, () => console.log(`server is up and running on ${port}!`));