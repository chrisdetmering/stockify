const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const hashPassword = (password, saltRounds) => {
    return bcrypt.hashSync(password, saltRounds);
}

const createToken = id => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1h' })
}

const getUserIdFromToken = (token) => {
    let id;
    let error;
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            error = { err };
        } else {
            id = decoded.id;
        }
    });
    return [id, error];
}

const isMatchingPassword = (password, hash) => {
    let error;
    let match;
    bcrypt.compare(password, hash, function (err, result) {
        if (err) {
            error = err;
        } else {
            match = result;
        }
    });

    return [match, error];
}



module.exports = {
    hashPassword,
    createToken,
    getUserIdFromToken,
    isMatchingPassword
}