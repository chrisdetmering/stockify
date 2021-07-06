const express = require('express');
const validateUserController = require('../controllers/validateUserController');
const registerUserController = require('../controllers/registerUserController');
const loginUserController = require('../controllers/loginUserController');

const router = express.Router();

router.post('/validate', validateUserController);
router.post('/login', loginUserController);
router.post('/register', registerUserController);



module.exports = router;