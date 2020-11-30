import { Router } from 'express';
import BotResponsesFilesController from '../Controllers/BotResponsesFiles.controller';
import validateRequest from '../Middlewares/RequestValidator.middleware';
import BotResponseFilesSchema from '../Entities/Schemas/BotResponseFiles.schema';

const BotResponsesFilesRoute = Router();

BotResponsesFilesRoute.get('/bot-responses-files', BotResponsesFilesController.getResponses);
BotResponsesFilesRoute.get('/bot-responses-files/:id', BotResponsesFilesController.getResponseById);
BotResponsesFilesRoute.post('/bot-responses-files', validateRequest(BotResponseFilesSchema), BotResponsesFilesController.postResponse);
BotResponsesFilesRoute.delete('/bot-responses-files/:id', BotResponsesFilesController.deleteResponse);
BotResponsesFilesRoute.put('/bot-responses-files/:id', validateRequest(BotResponseFilesSchema), BotResponsesFilesController.updateResponse);

export default BotResponsesFilesRoute;