import { Router } from 'express';
import Auth from "../Middlewares/Auth.middleware";
const HomeRoute = Router();

HomeRoute.get('/', (req, res) => {
  res.send('bienvenido al servicio BotTelegramServer.');
});
HomeRoute.post("/register",Auth.register);
HomeRoute.post("/login",Auth.login);

export default HomeRoute;