const express = require('express');
const { registerUser } = require('../controllers/userControllers');
const router = express.Router();

router.post('/', registerUser);  // Use the .post() method to define the POST route

// router.post('/login', authUser) // You can add more routes here

module.exports = router;
