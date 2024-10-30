const Question = require('../models/Question');

exports.getAll = () => Question.find();

exports.create = async (data) => {
    Question.create(data)
};
