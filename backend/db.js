const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/paytm')

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password:{
        type: String,
        required: true,
        minLength: 6
    },
    firstname:{
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastname:{
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
})

const User = mongoose.model('User', userSchema);

module.exports = {
    User
};