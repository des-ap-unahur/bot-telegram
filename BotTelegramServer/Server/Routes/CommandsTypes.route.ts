import { Router } from 'express';
import CommandsTypesController from '../Controllers/CommandsTypes.controller';

const CommandsTypesRoute = Router();

CommandsTypesRoute.get('/command-types', CommandsTypesController.getCommandsTypes);
CommandsTypesRoute.get('/command-types/:id', CommandsTypesController.getCommandTypeById);
CommandsTypesRoute.post('/command-types', CommandsTypesController.postCommandType);
CommandsTypesRoute.delete('/command-types/:id', CommandsTypesController.deleteCommandType);
CommandsTypesRoute.put('/command-types/:id', CommandsTypesController.updateCommandType);

export default CommandsTypesRoute;