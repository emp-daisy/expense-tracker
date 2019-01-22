import  * as express from 'express';
import {Request, Response} from "express";
import * as graphqlHTTP from 'express-graphql';
import schema from './schema';

const router = express.Router();

// Graphql route
router.use('/expense', graphqlHTTP({
  graphiql: true,
  schema: schema,
  formatError: (error : any) => ({
    message: error.message,
    locations: error.locations,
    stack: error.stack ? error.stack.split('\n') : [],
    path: error.path
  })
}));
// Default repsonse
router.use('*',(_req:Request, res:Response)=>{
  res.send("Invalid API path");
})

export default router;