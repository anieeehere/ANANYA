const mongoose = require("mongoose")

const loginSchema = new mongoose.Schema( {
    emailId : String,
    password : String

},
{ timestamps: true });

module.exports = mongoose.model('login', loginSchema)