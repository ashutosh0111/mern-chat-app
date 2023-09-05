const express = require('express');
const { registerUser , authUser} = require('../controllers/userControllers');
const router = express.Router();

router.route("/").post(registerUser);  // Use the .post() method to define the POST route

router.post('/login', authUser) // You can add more routes here

module.exports = router;
