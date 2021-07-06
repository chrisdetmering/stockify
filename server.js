require('dotenv').config()
const express = require('express');
const server = express();

const path = require('path');
const bodyParser = require('body-parser');

const port = 3000;

//Middleware

server.use(express.json())
//Serving React Build via Express.js
server.use('/', express.static(path.join(__dirname, './client/build')));

const authRoutes = require('./routes/authRoutes');
server.use('/api/auth', authRoutes);



//Catch All
server.get('*', (req, res) => res.sendFile(path.join(__dirname, './client/build/index.html')));

server.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});