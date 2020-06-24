import { Router } from 'express';
import BotActionsController from '../Controllers/BotActions.controller';


const BotRoute = Router();

BotRoute.get('/encuestas', BotActionsController.get);

BotRoute.post('/encuestas/:id', BotActionsController.post);

BotRoute.put('/encuestas/:id', BotActionsController.update);

BotRoute.delete('/encuestas/:id', BotActionsController.delete);

BotRoute.get('/encuestas/:id/respuestas', BotActionsController.updateResponses);

BotRoute.post('/encuestas/:id/respuestas', BotActionsController.postResponses);