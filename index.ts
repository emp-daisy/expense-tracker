import * as dotenv from 'dotenv';
import  * as express from 'express';
import appRouter from './src';
import { createConnection } from 'typeorm';

//initialize environment variable from .env file
dotenv.config();

const app = express();

createConnection(process.env.NODE_ENV||'development').then(()=>{
  app.use(appRouter);
  
  app.listen(process.env.PORT || 7000);
})