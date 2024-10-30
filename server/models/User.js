const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Username is required'],
    },
    lastName: {
        type: String,
        required: [true, 'Username is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    termsAccepted: {
        type: Boolean,
    },
    user_type: {
        type: String,
    },
});

userSchema.pre ('save',async function(next) {
    if (this.isNew) {
        this.password = await bcrypt.hash(this.password, 12);
    }
    next();
})

const User = mongoose.model('User', userSchema);

module.exports = userSchema;
module.exports = User;