import { Router } from 'express';
import BotCommandController from '../Controllers/BotCommand.controller';

const BotCommandRoute = Router();

BotCommandRoute.get('/bot-commands', BotCommandController.getCommands);
BotCommandRoute.get('/bot-commands/:id', BotCommandController.getCommandById);
BotCommandRoute.post('/bot-commands', BotCommandController.postCommand);
BotCommandRoute.delete('/bot-commands/:id', BotCommandController.deleteCommand);
BotCommandRoute.put('/bot-commands/:id', BotCommandController.updateCommand);

export default BotCommandRoute;