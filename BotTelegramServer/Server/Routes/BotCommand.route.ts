import { Router } from 'express';
import BotCommandController from '../Controllers/BotCommand.controller';

const BotCommandRoute = Router();

BotCommandRoute.get('/bot-commands', BotCommandController.getCommands);

export default BotCommandRoute;