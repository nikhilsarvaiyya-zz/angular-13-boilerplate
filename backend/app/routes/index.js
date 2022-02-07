var router = require('express').Router();
var appRoutes = require('./user');


//first route for backend
// http://localhost:8002/
router.get('/', function (req, res) {
    res.end(JSON.stringify("Hello, Welcome to my website"));
});


http://localhost:8002/api
router.use('/api', appRoutes);



module.exports = router