const Company = require('../models/Company');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.register = async (userData) => {

    if (userData.password !== userData.confirmPassword) {
        throw new Error('Password missmatch!');
    }

    const haveUser = await Company.findOne({ email: userData.email });

    if (haveUser) {
        throw new Error('User already registered!');
    }

    const user = await Company.create(userData); 

    return generateToken(user);
};

exports.login = async (userData) => {

    const user = await Company.findOne({ email: userData.email });

    if (!user) {
        throw new Error('User not found!');
    }

    const isValid = await bcrypt.compare(userData.password, user.password);
    if (!isValid) {
        throw new Error('No such user!');
    }

    const token = await generateToken(user);

    return token;
};

exports.getMyProfile = async (userId) => Company.findById(userId);


function generateToken(user) {
    const accessToken = jwt.sign({
        _id: user._id,
        companyName: user.companyName,
        vat: user.vat,
        email: user.email,
    }, 'SOMESECRETHERE')

    return {
        _id: user._id,
        companyName: user.companyName,
        vat: user.vat,
        email: user.email,
        user_type: user.user_type,
        accessToken,
    }
}

exports.generateToken = generateToken; 