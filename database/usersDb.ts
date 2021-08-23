const pool = require('./dbPoolService').getPool();
const { hashPassword } = require('../utils/auth');

export const getUserByEmail = async (email: string) => {
    const dbResponse = await pool.query(
        `SELECT * FROM users WHERE email = $1`,
        [email]);
    return dbResponse.rows[0];
}

export const getUserById = async (id: string) => {
    const dbResponse = await pool.query(
        `SELECT * FROM users WHERE id = $1`,
        [id]);
    return dbResponse.rows[0];
}

export const createUser = async (email: string, password: string) => {
    const hashedPassword = hashPassword(password, 10);

    const dbReponse = await pool.query(
        `INSERT INTO users (email, password) VALUES ($1, $2) 
        RETURNING id`,
        [email, hashedPassword]
    )
    return dbReponse.rows[0];
}
