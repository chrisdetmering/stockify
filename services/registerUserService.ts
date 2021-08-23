const { getUserByEmail, createUser } = require('../database/usersDb');
const { createToken } = require('../utils/auth');

interface MyError extends Error {
    status: number;
}

const registerUser = async (email: string, password: any) => {
    const user = await getUserByEmail(email);
    if (user) {
        const error = new Error('Email already exists');
        (error as MyError).status = 409;
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