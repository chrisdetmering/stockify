require('dotenv').config()
const express = require('express');
const path = require('path');
const server = express();
const pool = require('../database/connection');

async function getUsers() {
    try {
        const response = await pool.query('SELECT * FROM users');
        console.log(response.rows[0])
    } catch (err) {
        console.log(err);
    }
}

getUsers()



server.use('/', express.static(path.join(__dirname, '../client/build')))


server.listen(3000);