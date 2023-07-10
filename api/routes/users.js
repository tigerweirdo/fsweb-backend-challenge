const express = require('express');
const router = express.Router();
const Users = require('../models/usersModel')

// Burada 'Users' modelini require etmeliyiz. 
// Users modelini daha oluşturmadıysak, bu satırı daha sonra ekleyeceğiz.


// Get all users
router.get('/', async (req, res) => {
    try {
        // Tüm kullanıcıları getirecek bir Users model fonksiyonu olmalı.
         const users = await Users.getAll();
        // res.json(users);
    } catch (err) {
        res.status(500).json({ message: 'Failed to get users' });
    }
});

// More routes (POST, PUT, DELETE) will go here

module.exports = router;
