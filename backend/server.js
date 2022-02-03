// Modules
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
var mongoose = require('mongoose');

var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

// set our port
const port = 8000;

require('dotenv').config();

// config files
var db = require('./config/db');
console.log("connecting-----------",db);
mongoose.connect(db.url); //Mongoose connection created

const app = express()

app.use(cors(corsOptions))
app.use(bodyParser.json())


// frontend routes =========================================================
app.get('/', (req, res) => res.send('Welcome to Tutorialspoint!'));

//defining route
app.get('/tproute', function (req, res) {
   res.send('This is routing for the application developed using Node and Express...');
});



 

app.route('/api/cats').get((req, res) => {
    res.send({
        cats: [{ name: 'lilly' }, { name: 'lucy' }],
    })
})

app.route('/api/cats/:name').get((req, res) => {
    const requestedCatName = req.params['name']
    res.send({ name: requestedCatName })
  })

app.route('/api/cats').post((req, res) => {
    res.send(201, req.body)
  })

app.route('/api/cats/:name').delete((req, res) => {
    res.sendStatus(204)
})

app.route('/api/cats/:name').put((req, res) => {
    res.send(200, req.body)
})

// startup our app at http://localhost:3000
app.listen(port, () => console.log(`Example app listening on port ${port}!`));