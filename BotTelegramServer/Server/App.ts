import express, { Application } from 'express';
import { Home } from './Routes/Home.route'
const app: Application = express();

app.use('/', Home)

export default app;
