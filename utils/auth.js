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

const isMatchingPassword = async (password, hash) => {
    const match = await bcrypt.compare(password, hash);
    return match;
}



module.exports = {
    hashPassword,
    createToken,
    getUserIdFromToken,
    isMatchingPassword
}