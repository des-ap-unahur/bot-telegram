import App from './App';
import { configServer } from './Config/Server/Server.config';
import HomeRoute from './Routes/Home.route';
import UserRoute from './Routes/User.route';
import PollRoute from './Routes/Poll.route';
import PollQuestionsRoute from './Routes/PollQuestions.route';
import BotCommandRoute from './Routes/BotCommand.route';

const app = new App({
  port: Number(configServer.get('PORT')),
  name: configServer.get('NAME'),
  routes: [
    {route: HomeRoute, path: '/'},
    {route: UserRoute, path: '/api'},
    {route: PollRoute, path: '/api'},
    {route: PollQuestionsRoute, path:'/api'},
    {route: BotCommandRoute, path:'/api'}
  ]
})

app.listen();