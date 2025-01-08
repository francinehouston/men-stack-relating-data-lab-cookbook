// controllers/recipes.js

const express = require('express');
const router = express.Router();

const User = require('../models/user.js');
const Recipe = require('../models/recipe.js');
//const moment = require('moment')
//const recipeRoutes = require('./routes/recipes'); // Adjust path as necessar
// router logic will go here - will be built later on in the lab

const recipesController = require('../controllers/recipes');
//router.get('/', async (req, res) => {
//res.render('recipes/index.ejs');
//});


// fetch all data 
async function index(req, res) {

  try {

    if (!req.session.user) {
      return res.redirect('auth/sign-in')
    }
    const recipes = await Recipe.find({}).populate('createdBy')
    const formattedRecipes = recipes.map(recipe => ({
      ...recipe.toObject(),
      formattedDate:moment (recipe.createdAt).fromNow()
    }))
    res.render('recipes', { title: 'Recipes', recipes })
  }
  catch (error) {
    console.error(error.message);
    res.status(500).send('Internal server error');
  }
console.log(getAllRecipes)
}

async function newRecipe(req, res) {
  res.render('recipes/new', { name: 'New Recipe' })
}

async function createRecipe(req, res) {
  try {
    const { name, instructions, ingredients } = req.body
    // convert ingredients (comma-separated string) into an array, if provided
    const ingredientArray = ingredients ? ingredients.split('/').map(id => id.trim()) : [];
    // Create the new recipe
    const newRecipe = newRecipe({
      name,
      instructions,
      owner: req.user._id, //Assuming the user is authenticated and 'req.user' is available
      ingredients: ingredientArray,
    });
    // Save the recipe to the database
    awaitnewRecipe.save();

    // Redirect to the recipes index or show success
    res.redirect('/users/${req.user._id}/recipes');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error creating recipe.Please try again.');
  }
};

async function editRecipe(req,res) {
  const {recipeId } = req.params;
  try {
// Fetch the recipe by ID
const recipe = await Recipe.findById(req.params.id);
if (!recipe) {
  console.error('Recipe not found.');
  return res.redirect('/');
}
// Render the edit form and pass the recipe data
res.render ('recipes/edit,',{recipe});
  } catch (error) {
console.error('Error fetching recipe:', error.message);
res.redirect('/');
  }
};


async function postRecipe(req, res) {
  try {
    const { name = "new recipe", instructions = "new instructions" } = req.body;
    const newRecipe = new Recipe({
      name: name,
      instructions: instructions
    })
    await newReceipe.save();

    res.redirect('/recipes');
  } catch (error) {
    console.error(error.message)
    res.status(500).send("Internal Revenue Server")
  }
}

async function showRecipe(req, res) {
  try {
    // Extract recipe ID from params
    const recipeId = req.params.recipeId

    // Find the recipe by ID, ensuring it belongs to the logged-in user
    const recipe = await Recipe.findOne({ _id: recipeId, userId: req.userid });
    if (!recipe) {
      return res.status(404).send('Recipe not found');
    }
    // Render the show view, passing the recipe
    res.render('recipes/show', { recipe });
  } catch (error) {
    console.error('Error fetching recipe:', error);
    res.redirect('/recipes');// Redirect to index page on erroe
  }

}

async function updateRecipe(req,res) {
  try {
  const recipeId = req.params
  const {title,description, ingredients,instructions} = req.body;
  const updatedRecipe = await Recipe.findByIdAndUpdate( {_id: recipeId,userId: req.user.id},
    {
      title,
      description,
      ingredients: ingredients.split(',').map(item => item.trim()), // Convert ingredients to an array
      instructions
    },
    { new: true, runValidators: true } // Return updated recipe and validate fields
  );
  if (!updatedRecipe) {
    return res.status(404).send('Recipe not found or unauthorized');
  }
  // Redirect to the show page after successfull update
  res.redirect('/recipes/${recipeId}');

  } catch (error){
console.error('Error updating recipe:',error)
res.redirect('/recipes');// Redirect to index page to error
  }


};

async function deleteRecipe(req, res) {
  try {
    // Extract the recipe ID from the route parameters
    const { id } = req.params
    const deletedRecipe = await Recipe.findByIdAndDelete(id)
    if (deletedRecipe) {
      res.status(200).redirect('/recipes')
    } else {
      res.status(404).rendeer('404/notFound', { name: 'Recipe Not Found  ' })
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error")
  }

}


module.exports = { index, newRecipe, createRecipe, postRecipe, editRecipe, updateRecipe, showRecipe, deleteRecipe };

