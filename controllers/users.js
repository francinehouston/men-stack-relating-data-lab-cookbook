const express = require('express');
const router = express.Router();
const User = require('../models/user'); // Assuming you have a User model
const Pantry = require('../models/pantry'); // Assuming Pantry model holds the food items


// Index route to display all users (Community page)
router.get('/', async (req, res) => {
    try {
        // Fetch all users
        const users = await User.find();

        // Send the users to the view
        res.locals.users = users;

        // Render the community page (users/index.ejs)
        res.render('users/index');
    } catch (error) {
        console.error('Error fetching users:', error);
        res.redirect('/');
    }
});









// Show route for displaying a user profile and their pantry items
router.get('/users/:userId', async (req, res) => {
    try {
        const { userId } = req.params;

        // Find the user by userId
        const user = await User.findById(userId);

        if (!user) {
            console.error('User not found');
            return res.redirect('/');
        }

        // Find the user's pantry items
        const pantryItems = await Pantry.find({ user: userId });

        // Send the user and pantry items to the view
        res.locals.user = user;
        res.locals.pantryItems = pantryItems;

        // Render the show view
        res.render('users/show');
    } catch (error) {
        console.error('Error finding user or pantry items:', error);
        res.redirect('/');
    }
});

module.exports = router;
