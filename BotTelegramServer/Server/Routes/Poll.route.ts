import { Router } from 'express';
import PollController from '../Controllers/Poll.controller';
import validateRequest from '../Middlewares/RequestValidator.middleware';
import PollSchema from '../Entities/Schemas/Poll.schemas';

const PollRoute = Router();

PollRoute.get('/polls', PollController.getPolls);
PollRoute.get('/poll/:id', PollController.getPollById);
PollRoute.post('/poll', validateRequest(PollSchema), PollController.postPoll);
PollRoute.delete('/poll/:id', PollController.deletePoll);
PollRoute.put('/poll/:id', validateRequest(PollSchema), PollController.updatePoll);

export default PollRoute;