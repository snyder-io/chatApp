const express = require('express');
const authController = require('../controllers/auth.controller');
const router = express.Router();

router
    .route('/signup')
    .post(authController.signup);

router
    .route('/login')
    .post(authController.login);

router
    .route('/logout')
    .get(authController.logout);

module.exports = router;