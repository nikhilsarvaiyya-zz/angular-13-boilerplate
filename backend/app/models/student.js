var mongoose = require('mongoose');

// define our students model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Student', {
   firstName : {type : String, default: ''},
   lastName : {type : String, default: ''},
   email : {type : String, default: ''},
   mobile : {type : String, default: ''}
});