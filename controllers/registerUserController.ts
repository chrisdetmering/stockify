const { registerUser } = require('../services/registerUserService');
import { Request, Response } from 'express';

export default async (request: Request, response: Response) => {
    const { body } = request;

    try {
        const token = await registerUser(body.email, body.password);
        response.status(201).send({ session_token: token })
    } catch (err) {
        response.status(err.status || 500).send({
            errorMessage: err.message
                || 'Internal Server Error'
        })
    }
}