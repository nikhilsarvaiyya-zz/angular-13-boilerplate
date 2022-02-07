exports.index = function (req, res) {
    res.send('NOT IMPLEMENTED: Site Home Page--');
};

// Display list of all books.
exports.user_list = function (req, res) {
    var user = require('../models/user');
    user.find(function (err, users) {
        if (err) {
            res.send(err);
        }
        res.json(users);
    });
};

// Display detail page for a specific book.
exports.user_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Book detail: ' + req.params.id);
};

// Display book create form on GET.
exports.user_create_get = function (req, res) {
    res.send('NOT IMPLEMENTED: Book create GET');
};

// Handle book create on POST.
exports.user_create_post = function (req, res) {
    var User = require('../models/user');
    var user = new User(); // create a new instance of the user model
    
    user.firstName = req.body.firstName; 
    user.lastName = req.body.lastName; 
    user.email = req.body.email; 
    user.mobile = req.body.mobile; 
    user.save(function (err) {
        if (err) {
            res.send(err);
        }

        res.json({ message: 'user created!' });
    });
};

// Display book delete form on GET.
exports.user_delete_get = function (req, res) {
    res.send('NOT IMPLEMENTED: Book delete GET');
};

// Handle book delete on POST.
exports.user_delete_post = function (req, res) {
    res.send('NOT IMPLEMENTED: Book delete POST');
};

// Display book update form on GET.
exports.user_update_get = function (req, res) {
    res.send('NOT IMPLEMENTED: Book update GET');
};

// Handle book update on POST.
exports.user_update_post = function (req, res) {
    res.send('NOT IMPLEMENTED: Book update POST');
};

// Handle book update on POST.
exports.user_delete = function (req, res) {
    var user = require('../models/user');
  
    user.deleteOne({
        _id: req.params.id
    }, function (err, bear) {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted' });
    });
};



