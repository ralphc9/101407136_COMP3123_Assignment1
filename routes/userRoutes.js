const express = require('express');
const { body } = require('express-validator');
const { signupUser, loginUser } = require('../controllers/userController');
const router = express.Router();

router.post('/signup', [
    body('username').notEmpty().withMessage('Username is required'),
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
], signupUser);

router.post('/login', [
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('password').notEmpty().withMessage('Password is required')
], loginUser);

module.exports = router;
