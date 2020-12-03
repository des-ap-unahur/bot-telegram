import { Router } from 'express';

const HomeRoute = Router();

HomeRoute.get('/', (req, res) => {
  res.send('bienvenido al servicio BotTelegramServer.');
});

export default HomeRoute;