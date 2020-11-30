import { Router } from 'express';
import BotSubsUsersController from '../Controllers/BotSubsUsers.controller';
import validateRequest from '../Middlewares/RequestValidator.middleware';
import BotSubsUserSchema from '../Entities/Schemas/BotSubsUsers.schemas';

const BotSubsUsersRoute = Router();

BotSubsUsersRoute.get('/bot-subs-users', BotSubsUsersController.getBotSubsUsers);
BotSubsUsersRoute.get('/bot-subs-users/:id', BotSubsUsersController.getBotSubsUserById);
BotSubsUsersRoute.post('/bot-subs-users', validateRequest(BotSubsUserSchema), BotSubsUsersController.postBotSubsUser);
BotSubsUsersRoute.delete('/bot-subs-users/:id', BotSubsUsersController.deleteBotSubsUser);
BotSubsUsersRoute.put('/bot-subs-users/:id', validateRequest(BotSubsUserSchema), BotSubsUsersController.updateBotSubsUser);

export default BotSubsUsersRoute;