import { Router } from 'express';
import BotSubsUsersController from '../Controllers/BotSubsUsers.controller';

const BotSubsUsersRoute = Router();

BotSubsUsersRoute.get('/bot-subs-users', BotSubsUsersController.getBotSubsUsers);
BotSubsUsersRoute.get('/bot-subs-users/:id', BotSubsUsersController.getBotSubsUserById);
BotSubsUsersRoute.post('/bot-subs-users', BotSubsUsersController.postBotSubsUser);
BotSubsUsersRoute.delete('/bot-subs-users/:id', BotSubsUsersController.deleteBotSubsUser);
BotSubsUsersRoute.put('/bot-subs-users/:id', BotSubsUsersController.updateBotSubsUser);

export default BotSubsUsersRoute;