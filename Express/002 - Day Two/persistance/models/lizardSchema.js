const mongoose = require('mongoose');

const {Schema, model} = mongoose;

//Create a schema

const favFoodSchema = new Schema({
    food : {
        foodName : String,
        isMeat : Boolean
    }
})

const lizardSchema = new Schema({

    lizardName : {
        type : String,
        required: true

    },
    colour : String,
    rating : Number,
    isCuddly : Boolean,
    favFood : [favFoodSchema]


})

const Lizard = model('Lizard' , lizardSchema);

module.exports = {'Lizard' : Lizard};

