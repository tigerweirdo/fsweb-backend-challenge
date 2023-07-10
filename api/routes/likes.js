const express = require('express');
const router = express.Router();
const Likes = require('../models/likesModel');



// Get all likes
router.get('/', async (req, res) => {
    try {
        // const likes = await Likes.getAll();
        // res.json(likes);
    } catch (err) {
        res.status(500).json({ message: 'Failed to get likes' });
    }
});

// More routes (POST, DELETE) will go here

module.exports = router;
