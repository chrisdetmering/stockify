const { loginUser } = require('../services/loginUserService');

module.exports = async (request, response) => {
    const { body } = request;

    try {
        const token = await loginUser(body.email, body.password);
        response.status(201).send({ session_token: token })
    } catch (err) {
        response.status(err.status || 500).send({
            errorMessage: err.message
                || 'Internal Server Error'
        })
    }
}