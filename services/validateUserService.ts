import { VerifyErrors } from 'jsonwebtoken';
import { getUserById } from '../database/usersDb';
import { getUserIdFromToken } from '../utils/auth';

class CustomError {
    errorMessage: VerifyErrors | string;
    status: number;

    constructor(err: VerifyErrors | string, status: number) {
        this.errorMessage = err;
        this.status = status;
    }
}


const isValidUser = async (token: string) => {
    const [id, error] = getUserIdFromToken(token);
    if (Boolean(error)) {
        const newError: CustomError = new CustomError(error.err, 400);
        throw newError
    }
    const user = await getUserById(id);

    if (!user) {
        const newError: CustomError = new CustomError("User does not exists", 404);
        throw newError
    }

    return true;
}



module.exports = {
    isValidUser
}