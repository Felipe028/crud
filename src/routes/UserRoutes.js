const express = require('express');
const router = express.Router();

const UserController = require('../controllers/UserController');

//Create User Forma 1
router.post('/add1', UserController.create_1);
//Create User Forma 2
router.post('/add2', UserController.create_2);
//Update User
router.put('/:id', UserController.update);
//Delete User
router.delete('/:id', UserController.delete);
//Read All
router.get('/all', UserController.all);
//Read by Name
router.get('/name/:name', UserController.name);
//Read by Id
router.get('/id/:id', UserController.id);
//Read by E-mail
router.get('/email/:email', UserController.email);

module.exports = router;
