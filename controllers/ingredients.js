// controllers/recipes.js

const express = require('express');
const router = express.Router();

const User = require('../models/user.js');
const Recipe = require('../models/ingredient.js');

// router logic will go here - will be built later on in the lab

// Get all ingredients
async function index(req,res) {
    try {
const ingredients = await Ingredient.findAll({});
//res.json(ingredients); // Return the list of all ingredients
res.render('ingredients',)
    } catch (error) {
res.status(500).json({error: error.message});
    }
}
//async function  createIngredient(req,res) {
    //try {
//const {name }
    //} catch (error) {

    //}
//}

// Add a new ingredient
async function postIngredient(req,res) {
const {name } = req.body;
if (!name) {
    return res.status(400).json({error:"Ingredient name is required"});
}
try {
const ingredient = await Ingredient.create({name});
res.status(201).json(ingredient); // Return the created ingredient
} catch (error) {
res.status(500).json({error: error.message});
}

};

module.exports = {index, postIngredient}
