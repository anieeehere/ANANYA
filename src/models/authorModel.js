const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema( {
   
    author_name: String,
    age: Number,
    address:String,
    ratings:  {
    type:Number,
    default : 4.5 
    }

}, { timestamps: true });

module.exports = mongoose.model('Author', authorSchema)
