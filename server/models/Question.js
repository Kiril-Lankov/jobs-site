const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    questionnaire: [{
        question: {
            type: String,
        },
        countAnswers: {
            type: Number,
        },
        answers: [{
            type: String,
        }],
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    type: {
        type: String,
        required: [true, 'Type is required'],
    },
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;