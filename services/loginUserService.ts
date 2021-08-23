import { getUserByEmail } from '../database/usersDb';
import { isMatchingPassword, createToken } from '../utils/auth';

interface MyError extends Error {
    status: number;
}

export const loginUser = async (email: string, password: string) => {
    const user = await getUserByEmail(email);
    if (!user) {
        const error = new Error("User does not exist");
        (error as MyError).status = 404;
        throw error;
    }
    const isMatching = await isMatchingPassword(password, user.password);

    if (!isMatching) {
        const error = new Error("Password does not match");
        (error as MyError).status = 403;
        throw error;
    } else {
        const { id } = user;
        const token = createToken(id);
        return token;
    }
}
