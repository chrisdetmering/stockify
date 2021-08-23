import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


export const hashPassword = (password: string | Buffer, saltRounds: string | number) => {
    return bcrypt.hashSync(password, saltRounds);
}

export const createToken = (id: any) => {
    return jwt.sign({ id }, process.env.JWT_SECRET as string, { expiresIn: '1h' })
}

export const getUserIdFromToken = (token: string): [string, { err: jwt.VerifyErrors; }] => {
    let id!: string;
    let error!: { err: jwt.VerifyErrors; };
    let secret: string;

    if (!!process.env.JWT_SECRET) {
        secret = process.env.JWT_SECRET;
    } else {
        throw new Error('You do not have JWT_SECRET environment variable')
    }

    jwt.verify(token, secret, (err, decoded) => {
        if (err) {
            error = { err };
        } else {
            id = decoded?.id;
        }
    });
    return [id, error];
}

export const isMatchingPassword = async (password: string | Buffer, hash: string) => {
    const match = await bcrypt.compare(password, hash);
    return match;
}