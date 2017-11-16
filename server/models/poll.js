const mongoose = require('mongoose');

const PollSchema = new mongoose.Schema({
    question: {
        type: String,
        required: [true, "Question can't be blank" ],
        minlength: [8, "Question must be at least 8 characters"]
    },
    options: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Option'
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' 
    }
}, { timestamps: true })

mongoose.model('Poll', PollSchema);