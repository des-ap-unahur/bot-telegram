import { Router } from 'express';
import PollController from '../Controllers/Poll.controller';
import Poll from '../Models/Poll.model';

const PollRoute = Router();

PollRoute.get('/encuestas', PollController.get);

PollRoute.post('/encuestas/:id', PollController.post);

PollRoute.put('/encuestas/:id', PollController.update);

PollRoute.delete('/encuestas/:id', PollController.delete);

PollRoute.get('/encuestas/respuestas', PollController.getResponses);

PollRoute.post('/encuestas/:id/respuestas', PollController.postResponses);




export default PollRoute;