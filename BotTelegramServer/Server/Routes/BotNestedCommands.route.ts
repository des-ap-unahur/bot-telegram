import { Router } from 'express';
import BotNestedCommandController from '../Controllers/BotNestedCommands.controller';

const BotNestedCommandRoute = Router();

BotNestedCommandRoute.get('/bot-nested-commands', BotNestedCommandController.getCommands);
BotNestedCommandRoute.get('/bot-nested-commands/:id', BotNestedCommandController.getCommandById);
BotNestedCommandRoute.post('/bot-nested-commands', BotNestedCommandController.postCommand);
BotNestedCommandRoute.delete('/bot-nested-commands/:id', BotNestedCommandController.deleteCommand);
BotNestedCommandRoute.put('/bot-nested-commands/:id', BotNestedCommandController.updateCommand);

export default BotNestedCommandRoute;