import { Router } from 'express';
import CommandsTypesController from '../Controllers/CommandsTypes.controller';
import validateRequest from '../Middlewares/RequestValidator.middleware';
import CommandTypeSchema from '../Entities/Schemas/CommandsTypes.schemas';

const CommandsTypesRoute = Router();

CommandsTypesRoute.get('/command-types', CommandsTypesController.getCommandsTypes);
CommandsTypesRoute.get('/command-types/:id', CommandsTypesController.getCommandTypeById);
CommandsTypesRoute.post('/command-types', validateRequest(CommandTypeSchema), CommandsTypesController.postCommandType);
CommandsTypesRoute.delete('/command-types/:id', CommandsTypesController.deleteCommandType);
CommandsTypesRoute.put('/command-types/:id', validateRequest(CommandTypeSchema), CommandsTypesController.updateCommandType);

export default CommandsTypesRoute;