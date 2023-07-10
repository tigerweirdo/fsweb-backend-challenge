const express = require('express');
const router = express.Router();
const Comments = require('../models/commentsModel');

// Get all comments
router.get('/', async (req, res) => {
    try {
        const comments = await Comments.getAll();
        // res.json(comments);
    } catch (err) {
        res.status(500).json({ message: 'Failed to get comments' });
    }
});

// More routes (POST, PUT, DELETE) will go here

module.exports = router;
