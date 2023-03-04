const path = require('path');

const express = require('express');

const userController = require('../controller/users');

const router = express.Router();

router.get('/get-users',userController.getUsers);

router.post('/add-user',userController.addUser);

router.post('/delete-user/:id',userController.deleteUser);




module.exports = router;