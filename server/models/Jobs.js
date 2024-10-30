const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Types.ObjectId,
        required: true,
    },
    title: {
        type: String,
    },
    techStack: {
        sql: {
            type: Boolean,
        },
        nosql: {
            type: Boolean,
        },
        javascript: {
            type: Boolean,
        },
        java: {
            type: Boolean,
        },
        python: {
            type: Boolean,
        },
        c: {
            type: Boolean,
        },
        htmlcss: {
            type: Boolean,
        },
        angular: {
            type: Boolean,
        },
        react: {
            type: Boolean,
        },
        laravel: {
            type: Boolean,
        },
    },
    date: {
        type: String,
    },
    position: {
        type: String,
    },
    text: {
        type: String,
    },
    category: {
        frontend: {
            type: Boolean,
        },
        backend: {
            type: Boolean,
        },
    },
    level: {
        junior: {
            type: Boolean,
        },
        mid: {
            type: Boolean,
        },
        senior: {
            type: Boolean,
        },
        lead: {
            type: Boolean,
        },
    },
    way: {
        remote: {
            type: Boolean,
        },
        hybrid: {
            type: Boolean,
        },
        onSite: {
            type: Boolean,
        },
    },
    role: [{
        type: String,
    }],
    candidates: [{
        userId: {
            type: String,
        },
        email: {
            type: String,
        },
        selectedAnswers: {
            type: Map,
            of: String,
        },
    }],
    allQuestionnaire: [{
        _id: {
            type: String,
        },
        questionnaire: [{
            answers: [{
                type: String,
            }],
            countAnswers: {
                type: Number,
            },
            question: {
                type: String,
            },
            id: {
                type: String,
            },
        }],
        type: {
            type: String,
        },
        owner: {
            type: String,
        },
    }],

});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;