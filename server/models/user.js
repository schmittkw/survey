const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name must be at least 3 characters."],
        minlength: [true, "Name must be at least 3 characters."]
    }
}, { timestamps: true })

mongoose.model('User', UserSchema);