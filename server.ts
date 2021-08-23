require('dotenv').config()
import { Request, Response } from 'express';
import express from 'express';
const server = express();

import path from 'path';
const port = 3000;

//Middleware

server.use(express.json())
//Serving React Build via Express.js
server.use('/', express.static(path.join(__dirname, './client/build')));

import authRoutes from './routes/authRoutes';
server.use('/api/auth', authRoutes);



//Catch All
server.get('*', (req: Request, res: Response) => res.sendFile(path.join(__dirname, './client/build/index.html')));

server.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});