import { Router } from 'express';
import BotCommandController from '../Controllers/BotCommand.controller';
import BotCommandSchema from '../Entities/Schemas/BotCommand.schemas';
import validateRequest from '../Middlewares/RequestValidator.middleware';

const BotCommandRoute = Router();

BotCommandRoute.get('/bot-commands/types', BotCommandController.getCommandsTypes);
BotCommandRoute.get('/bot-commands/:id/types', BotCommandController.getCommandsTypesById);
BotCommandRoute.get('/bot-commands', BotCommandController.getCommandsWithAllRelations);
BotCommandRoute.get('/bot-commands/:id', BotCommandController.getCommandById);
BotCommandRoute.post('/bot-commands', validateRequest(BotCommandSchema), BotCommandController.postCommand);
BotCommandRoute.delete('/bot-commands/:id', BotCommandController.deleteCommand);
BotCommandRoute.put('/bot-commands/:id', validateRequest(BotCommandSchema), BotCommandController.updateCommand);

export default BotCommandRoute;