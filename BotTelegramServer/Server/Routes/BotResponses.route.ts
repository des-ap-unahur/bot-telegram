import { Router } from 'express';
import BotResponsesController from '../Controllers/BotResponses.controller';
import validateRequest from '../Middlewares/RequestValidator.middleware';
import BotResponseSchema from '../Entities/Schemas/BotResponses.schemas';

const BotResponsesRoute = Router();

BotResponsesRoute.get('/bot-responses', BotResponsesController.getResponses);
BotResponsesRoute.get('/bot-responses/:id', BotResponsesController.getResponseById);
BotResponsesRoute.post('/bot-responses', validateRequest(BotResponseSchema), BotResponsesController.postResponse);
BotResponsesRoute.delete('/bot-responses/:id', BotResponsesController.deleteResponse);
BotResponsesRoute.put('/bot-responses/:id', validateRequest(BotResponseSchema), BotResponsesController.updateResponse);

export default BotResponsesRoute;