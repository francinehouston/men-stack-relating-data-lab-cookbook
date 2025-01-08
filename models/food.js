const mongoose = require('mongoose');
const foodSchema = new mongoose.Schema ({
    name:{
        type:String,
        required : true
    },
    category:{
        type: String,
        required: true,
    },
    quantity :{
        type:Number,
        default:1,
    }
});

const Food = mongoose.model('Food',foodSchema)

module.exports = Food;