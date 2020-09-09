import { Router } from 'express';
import BotUserController from '../Controllers/BotUser.controller';
import validateRequest from '../Middlewares/RequestValidator.middleware';
import BotUserSchema from '../Entities/Schemas/BotUsers.schema';

const BotUserRoute = Router();

BotUserRoute.get('/bot-users', BotUserController.getUsers);
BotUserRoute.get('/bot-users/:id', BotUserController.getUserById);
BotUserRoute.post('/bot-users', validateRequest(BotUserSchema), BotUserController.postUser);
BotUserRoute.delete('/bot-users/:id', BotUserController.deleteUser);
BotUserRoute.put('/bot-users/:id', validateRequest(BotUserSchema), BotUserController.updateUser);

export default BotUserRoute;