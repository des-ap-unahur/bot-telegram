import { Router } from 'express';
import BotUserController from '../Controllers/BotUser.controller';

const BotUserRoute = Router();

BotUserRoute.get('/bot-users', BotUserController.getUsers);
BotUserRoute.get('/bot-users/:id', BotUserController.getUserById);
BotUserRoute.post('/bot-users', BotUserController.postUser);
BotUserRoute.delete('/bot-users/:id', BotUserController.deleteUser);
BotUserRoute.put('/bot-users/:id', BotUserController.updateUser);

export default BotUserRoute;