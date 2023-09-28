const express = require('express');
const router = express.Router();
const categoryController = require('../Controller/category');

// Define routes for the "post" resource
router.get('/', categoryController.getAllCategories);
// Add more routes as needed, e.g., for creating, updating, or deleting posts

module.exports = router;