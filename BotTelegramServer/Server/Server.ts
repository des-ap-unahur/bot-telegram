import App from './App';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import { configServer } from './Config/Server/Server.config';
import { Home } from './Routes/Home.route';

const app = new App({
  port: Number(configServer.get('PORT')),
  name: configServer.get('NAME'),
  middlewares: [
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true }),
    cors(),
    morgan('dev'),
  ],
  routes: [
    {route: Home, path: '/'}
  ]
})

app.listen();