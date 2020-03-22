const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    removed: Boolean,
    senha: String,
    cpf: String,
    date: { type: Date, default: Date.now },
});
 
module.exports = mongoose.model('User', userSchema)