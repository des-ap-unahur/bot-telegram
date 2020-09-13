import { Router } from 'express';
import BotNestedCommandController from '../Controllers/BotNestedCommands.controller';
import validateRequest from '../Middlewares/RequestValidator.middleware';
import BotNestedCommandsSchema from '../Entities/Schemas/BotNestedCommand.schema';

const BotNestedCommandRoute = Router();

BotNestedCommandRoute.get('/bot-nested-commands', BotNestedCommandController.getCommands);
BotNestedCommandRoute.get('/bot-nested-commands/:id', BotNestedCommandController.getCommandById);
BotNestedCommandRoute.post('/bot-nested-commands', validateRequest(BotNestedCommandsSchema), BotNestedCommandController.postCommand);
BotNestedCommandRoute.delete('/bot-nested-commands/:id', BotNestedCommandController.deleteCommand);
BotNestedCommandRoute.put('/bot-nested-commands/:id', validateRequest(BotNestedCommandsSchema), BotNestedCommandController.updateCommand);

export default BotNestedCommandRoute;