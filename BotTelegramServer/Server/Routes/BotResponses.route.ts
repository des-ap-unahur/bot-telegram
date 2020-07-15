import { Router } from 'express';
import BotResponsesController from '../Controllers/BotResponses.controller';

const BotResponsesRoute = Router();

BotResponsesRoute.get('/bot-responses', BotResponsesController.getResponses);
BotResponsesRoute.get('/bot-responses/:id', BotResponsesController.getResponseById);
BotResponsesRoute.post('/bot-responses', BotResponsesController.postResponse);
BotResponsesRoute.delete('/bot-responses/:id', BotResponsesController.deleteResponse);
BotResponsesRoute.put('/bot-responses/:id', BotResponsesController.updateResponse);

export default BotResponsesRoute;