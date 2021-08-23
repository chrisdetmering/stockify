const { isValidUser } = require('../services/validateUserService');
import { Request, Response } from 'express';

export default async (request: Request, response: Response) => {
    const { body } = request;

    try {
        const isValid = await isValidUser(body.sessionToken)
        if (isValid) {
            response.status(200).send({ message: 'loggedIn' })
        }
    } catch (err) {
        response.status(err.status || 500).send({
            errorMessage: err.message
                || 'Internal Server Error'
        })
    }
}