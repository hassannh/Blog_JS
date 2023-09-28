const express = require('express');
const router = express.Router();
const postController = require('../Controller/post');





router.get('/', postController.getAllPosts);
// Add more routes as needed, e.g., for creating, updating, or deleting posts

module.exports = router;