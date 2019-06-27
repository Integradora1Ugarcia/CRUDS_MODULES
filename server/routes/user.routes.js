const express = require ('express');
const router = express.Router();
const user = require('../controllers/user.controller');
//const jwtHelper = require('../config/jwtHelper');

//const user = require('../controllers/user.controller');

//CRUDS Modules//
router.get('/', user.getUsers);
router.post('/', user.createUser);
router.get('/:id', user.getUser);
router.put('/:id', user.editUser);
router.delete('/:id', user.deleteUser);
/*
//Login//
router.post('/register', user.register);
router.post('/authenticate', user.authenticate);
router.get('/profile', jwtHelper.verifyJwtToken, user.userProfile);
//End Login//*/

module.exports = router;