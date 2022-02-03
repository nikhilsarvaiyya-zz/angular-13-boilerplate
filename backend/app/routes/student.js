// sample api route
// grab the student model we just created
var Student = require('./app/models/student');
app.get('/api/students', function(req, res) {
    // use mongoose to get all students in the database
    Student.find(function(err, students) {
       // if there is an error retrieving, send the error.
       // nothing after res.send(err) will execute
       if (err)
          res.send(err);
       res.json(students); // return all students in JSON format
    });
 });

app.post('/api/students/send', function (req, res) {
    var student = new Student(); // create a new instance of the student model
    student.firstName = req.body.firstName; // set the student name (comes from the request)
    student.lastName = req.body.lastName;
    student.email = req.body.email;
    student.mobile = req.body.mobile;
    student.save(function(err) {
       if (err)
          res.send(err);
          res.json({ message: 'student created!' });
    });
 });

 app.delete('/api/students/:student_id', function (req, res) {
    Student.remove({
       _id: req.params.student_id
    }, function(err, bear) {
       if (err)
          res.send(err);
       res.json({ message: 'Successfully deleted' });
    });
 });