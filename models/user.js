const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
    // age:Number,
    // gender: {
    //     type: String,
        
    //     enum:['male','female','other'],
    // }
});

const userModel = mongoose.model('User', userSchema);
module.exports = userModel;