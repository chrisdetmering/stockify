const pool = require('./dbPoolService').getPool();
const { hashPassword } = require('../utils/auth');

const getUserByEmail = async email => {
    const dbResponse = await pool.query(
        `SELECT * FROM users WHERE email = $1`,
        [email]);
    return dbResponse.rows[0];
}

const getUserById = async id => {
    const dbResponse = await pool.query(
        `SELECT * FROM users WHERE id = $1`,
        [id]);
    return dbResponse.rows[0];
}

const createUser = async (email, password) => {
    const hashedPassword = hashPassword(password, 10);

    const dbReponse = await pool.query(
        `INSERT INTO users (email, password) VALUES ($1, $2) 
        RETURNING id`,
        [email, hashedPassword]
    )
    return dbReponse.rows[0];
}



module.exports = {
    getUserByEmail,
    createUser,
    getUserById
}