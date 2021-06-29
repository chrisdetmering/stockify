const express = require('express');
const path = require('path');
const server = express();

server.use('/', express.static(path.join(__dirname, '../client', 'build')))

server.get('*', (req, res) => res.sendFile(path.resolve('client', 'build', 'index.html')));
server.listen(3000);