const express = require('express');
const router = express.Router();
const parser = require('body-parser');
const jsonParser = parser.json();
const auth = require('../middleware/auth');
const authController = require('../controller/auth');
const { check } = require('express-validator/check');

router.get('/auth', auth, authController.authUser);

router.post('/auth',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists(),
  ],
  authController.loginUser
);





module.exports = router;
