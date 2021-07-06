const { getUserByEmail, createUser } = require('../database/usersDb');
const { createToken } = require('../utils/auth');

const registerUser = async (email, password) => {
    const user = await getUserByEmail(email);
    if (user) {
        const error = new Error('Email already exists')
        error.status = 409;
        throw error
    } else {
        const { id } = await createUser(email, password);
        const token = createToken(id);
        return token
    }

}

module.exports = {
    registerUser
}