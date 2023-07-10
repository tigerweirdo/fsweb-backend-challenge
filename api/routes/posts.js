const express = require('express');
const router = express.Router();
const Posts = require('../models/postsModel');

// As with the users route, you'll want to import your 'Posts' model here.


// Get all posts
router.get('/', async (req, res) => {
    try {
        const posts = await Posts.getAll();
        // res.json(posts);
    } catch (err) {
        res.status(500).json({ message: 'Failed to get posts' });
    }
});

// More routes (POST, PUT, DELETE) will go here

module.exports = router;
