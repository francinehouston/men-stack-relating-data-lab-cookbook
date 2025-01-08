const Recipe = require('../models/recipe');
const recipes = require('../data/recipes')




async function seedData(req, res) {
    try {
        await Recipe.insertMany(recipes);
        res.status(201).send('Recipe seeded successfully')
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Error seeding recipe')
    }
}


module.exports = { seedData }

