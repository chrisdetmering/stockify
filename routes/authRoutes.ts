import express from 'express';
import validateUserController from '../controllers/validateUserController';
import registerUserController from '../controllers/registerUserController';
import loginUserController from '../controllers/loginUserController';

const router = express.Router();

router.post('/validate', validateUserController);
router.post('/login', loginUserController);
router.post('/register', registerUserController);



export default router;