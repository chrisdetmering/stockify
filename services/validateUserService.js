const { getUserById } = require('../database/usersDb');
const { getUserIdFromToken } = require('../utils/auth');

const isValidUser = async token => {
    const [id, error] = getUserIdFromToken(token);
    if (Boolean(error)) {
        const newError = new Error(error.err);
        newError.status = 400;
        throw newError
    }
    const user = await getUserById(id);

    if (!user) {
        const error = new Error('User does not exist');
        error.status = 404;
        throw error
    }

    return true;
}



module.exports = {
    isValidUser
}