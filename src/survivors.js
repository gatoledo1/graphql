const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: String, 
    attribute: String, 
    email: String, 
    infectado: Boolean
});

module.exports = mongoose.model("survivors", UserSchema);