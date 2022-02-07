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
const port = 8002;

// config files =========================================================
var db = require('./config/db');
mongoose.connect(db.url);

// set Express =========================================================
const app = express()
app.use(cors(corsOptions))
app.use(bodyParser.json())


// socketIo
const http = require('http').Server(app);
const io = require('socket.io')(http);

io.on("connection", socket => {
   let previousId;
 
   const safeJoin = currentId => {
     socket.leave(previousId);
     socket.join(currentId, () => console.log(`Socket ${socket.id} joined room ${currentId}`));
     previousId = currentId;
   };
 
   // ...
 });
// frontend routes =========================================================
var indexRoute = require('./app/routes/index');
app.use('/', indexRoute);


// startup our app at http://localhost:3000 =========================================================
http.listen(port, () => console.log(`server is up and running on ${port}!`));