import { Router } from 'express';
import Auth from "../Middlewares/Auth.middleware";
const HomeRoute = Router();

HomeRoute.get('/', (req, res) => {
  res.send('bienvenido al servicio BotTelegramServer.');
});
HomeRoute.post("/api/register",Auth.register);
HomeRoute.post("/api/login",Auth.login);

export default HomeRoute;