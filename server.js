import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import userRouter from './src/features/user/routes/user.routes.js';
import { errorHandlerMiddleware } from './src/middleware/error.middleware.js';
import { invalidRoutesHandlerMiddleware } from './src/middleware/invalidRoute.middleware.js';
import cookieParser from 'cookie-parser';

const app = express();

//middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());

//paths
app.use('/api/v1/users', userRouter);

//invalid routes
app.use(invalidRoutesHandlerMiddleware);

//error handling
app.use(errorHandlerMiddleware);

app.listen(3000, () => {
  console.log('server listening on 3000');
});
