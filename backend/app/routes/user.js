
var router = require('express').Router();

// Require controller modules.
var user_controller = require('../controllers/userController');

// router.get('/user', user_controller.ReadUser);
// router.post('/user/send', user_controller.AddUser);


router.get('/', user_controller.index);
router.get('/user/create', user_controller.user_create_get);
router.post('/user/create', user_controller.user_create_post);
router.get('/user/:id/delete', user_controller.user_delete_get);
router.post('/user/:id/delete', user_controller.user_delete_post);
router.get('/user/:id/update', user_controller.user_update_get);
router.post('/user/:id/update', user_controller.user_update_post);
router.get('/user/:id', user_controller.user_detail);
router.get('/users', user_controller.user_list);
router.delete('/user/:id/delete', user_controller.user_delete);

module.exports = router;