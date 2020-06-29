import App from './App';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import { configServer } from './Config/Server/Server.config';
import HomeRoute from './Routes/Home.route';
import UserRoute from './Routes/User.route';

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
    {route: HomeRoute, path: '/'},
    {route: UserRoute, path: '/api'}
  ]
})

app.listen();