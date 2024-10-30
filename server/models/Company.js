const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const companySchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: [true, 'Name is required'],
    },
    vat: {
        type: String,
        required: [true, 'Vat is required'],
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
    jobs: [{
        type: mongoose.Types.ObjectId,
    },],
});

companySchema.pre ('save',async function(next) {
    if (this.isNew) {
        this.password = await bcrypt.hash(this.password, 12);
    }
    next();
})

const Company = mongoose.model('Company', companySchema);

module.exports = companySchema;
module.exports = Company;