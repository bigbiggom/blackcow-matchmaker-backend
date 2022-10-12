// models/user.js
const mongoose = require('mongoose');

// Define Schemes
const userSchema = new mongoose.Schema({
    lol_id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    win_count: {
        type: Number
    },
    lose_count: {
        type: Number
    },
}, {
    timestamps: true
});

userSchema.statics.findAll = function () {
    return this.find({})
}

// Create Model & Export
module.exports = mongoose.model('User', userSchema)