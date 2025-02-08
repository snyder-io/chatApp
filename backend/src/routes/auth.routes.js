const express = require('express');
const router = express.Router();

router
    .route('/signup')
    .post((req, res) => {
        res.send('SignUp Route')
    });

router
    .route('/login')
    .post((req, res) => {
        res.send('LogIn Route')
    });

router
    .route('/logout')
    .get((req, res) => {
        res.send('LogOut Route')
    });

module.exports = router;