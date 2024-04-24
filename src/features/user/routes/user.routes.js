//third-party imports
import express from 'express';

//local import
import UserController from '../controllers/user.controller.js';
import jwtAuth from '../../../middleware/jwtAuth.middleware.js';

// initialize
const userRouter = express.Router();
const userController = new UserController();

//paths
userRouter.get('/', userController.getAllUsers);
userRouter.post('/signup', userController.signUp);
userRouter.post('/signin', userController.signIn);

export default userRouter;
