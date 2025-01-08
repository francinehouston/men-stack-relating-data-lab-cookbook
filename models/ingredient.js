const mongoose = require('mongoose');

const IngredientSchema = new mongoose.Schema ({
    name:{
        type: String,
        required: false,
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref:'User'
        }
    }
},{timestamps: true});

const Ingredient = mongoose.model('Ingredient',IngredientSchema)

module.exports = Ingredient;