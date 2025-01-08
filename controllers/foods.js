const express = require('express');
const User = require('../models/user');
const router = express.Router();
const Food = require('../models/food'); // Ensure your Food model is imported

router.get('/', (req, res) => {
    const userId = req.session.user._id
    res.render('foods/index.ejs', { id: userId });
});

// index
// router.get('/users/:userId/foods', async (req, res) => {

//     try {
//         const { userId } = req.params; // Extract userId from the URL
//         const user = await User.findById(userId);
//         //const foods = await Food.find({user:userId});
//         //res.render('food/index', {userId, foods});

//         if (!user) {
//             console.error('User not found');
//             return res.redirect('/');
//         }
//         // Pass the pantry items and user ID to the view 
//         res.render('foods/index', { pantry: user.pantry, userId });
//     } catch (error) {
//         console.error('Error loading pantry', error);
//         res.status(500).send('Error loading pantry');
//     }
// })

// new
router.get('/new', async (req, res) => {
    try {

        res.render('foods/new');// Render the form with the ID
    } catch (error) {
        console.error('Error rendering new food form:', error);
        res.status(500).send('Error loading the form');
    }
});

// Create food item: POST /users/:userId/foods
router.post('/', async (req, res) => {
    try {
        const userId = req.session.user._id

        // Save the new food item to the database
        const user = await User.findById(userId)

        user.pantry.push(req.body)
        await user.save();

        // // Redirect to the foods list
        res.redirect(`/users/${userId}/foods`);

    } catch (error) {
        console.error('Error creating new food item:', error);
        res.status(500).send('Error creating food item');
    }
});


// Delete route
router.delete('/:itemId', async (req, res) => {
    try {
        const { userId, itemId } = req.params;

        // Verify the user and delete the item
        const result = await Pantry.deleteOne({ _id: itemId, user: userId });

        if (result.deletedCount === 0) {
            console.error('No item deleted. Item not found or user mismatch.');
        }

        // Redirect to the pantry index
        res.redirect('/pantry');
    } catch (error) {
        console.error('Error deleting food item:', error);

        // Redirect home on error
        res.redirect('/');
    }
});

router.put('/:itemId', async (req, res) => {
    try {
        const { userId, itemId } = req.params;
        const { name, description } = req.body;

        // Look up the user by ID
        const user = await User.findById(userId);

        if (!user) {
            console.error(`User with ID ${userId} not found`);
            return res.redirect('/');
        }

        // Look up the food item by itemId
        const foodItem = user.pantry.id(itemId);

        if (!foodItem) {
            console.error(`Food item with ID ${itemId} not found`);
            return res.redirect('/');
        }

        // Update the food item's properties
        foodItem.name = name;
        foodItem.description = description;

        // Save changes to the user
        await user.save();

        // Redirect back to the pantry index view
        res.redirect(`/users/${userId}/foods`);
    } catch (err) {
        console.error(err);
        res.redirect('/');
    }
});

// // Create food item: POST /users/:userId/foods
// router.post('/', async (req, res) => {
//     try {
//         const { userId } = req.params;
//         const { name, description } = req.body;

//         // Save the new food item to the database
//         const Food = require('../models/food'); // Ensure your Food model is imported
//         const newFood = new Food({
//             name,
//             description,
//             user: userId
//         });

//         await newFood.save();

//         // Redirect to the foods list
//         res.redirect(`/users/${userId}/foods`);
//     } catch (error) {
//         console.error('Error creating new food item:', error);
//         res.status(500).send('Error creating food item');
//     }
// });



// Edit Route: GET /users/:userId/foods/:itemId/edit
router.get('/:itemId/edit', async (req, res) => {
    try {
        const { userId, itemId } = req.params;

        // Look up the user by ID
        const user = await User.findById(userId);

        if (!user) {
            console.error(`User with ID ${userId} not found`);
            return res.redirect('/');
        }

        // Look up the food item by itemId
        const foodItem = user.pantry.id(itemId);

        if (!foodItem) {
            console.error(`Food item with ID ${itemId} not found`);
            return res.redirect('/');
        }

        // Pass the current food item to the view
        res.locals.foodItem = foodItem;

        // Render the edit view with the food item
        res.render('foods/edit', { food: foodItem, userId });
    } catch (err) {
        console.error(err);
        res.redirect('/');
    }
});

module.exports = router;
