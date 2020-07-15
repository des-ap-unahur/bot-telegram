import { Router } from 'express';
import BotResponsesFilesController from '../Controllers/BotResponsesFiles.controller';

const BotResponsesFilesRoute = Router();

BotResponsesFilesRoute.get('/bot-responses-files', BotResponsesFilesController.getResponses);
BotResponsesFilesRoute.get('/bot-responses-files/:id', BotResponsesFilesController.getResponseById);
BotResponsesFilesRoute.post('/bot-responses-files', BotResponsesFilesController.postResponse);
BotResponsesFilesRoute.delete('/bot-responses-files/:id', BotResponsesFilesController.deleteResponse);
BotResponsesFilesRoute.put('/bot-responses-files/:id', BotResponsesFilesController.updateResponse);

export default BotResponsesFilesRoute;