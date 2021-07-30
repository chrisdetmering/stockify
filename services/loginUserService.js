const { getUserByEmail } = require('../database/usersDb');
const { isMatchingPassword, createToken } = require('../utils/auth');


const loginUser = async (email, password) => {
    const user = await getUserByEmail(email);
    if (!user) {
        const error = new Error("User does not exist");
        error.status = 404;
        throw error;
    }
    const isMatching = await isMatchingPassword(password, user.password);

    if (!isMatching) {
        const error = new Error("Either user does not exist or password does not match");
        error.status = 403;
        throw error;
    } else {
        const { id } = user;
        const token = createToken(id);
        return token;
    }
}

module.exports = {
    loginUser
}
