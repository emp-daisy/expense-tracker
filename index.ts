import * as dotenv from 'dotenv';
import  * as express from 'express';
import appRouter from './src';

//initialize environment variable from .env file
dotenv.config();

const app = express();

app.use(appRouter);

app.listen(process.env.PORT || 7000);