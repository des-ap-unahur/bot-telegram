import { Router } from 'express';
import PollController from '../Controllers/Poll.controller';

const PollRoute = Router();

PollRoute.get('/polls', PollController.getPolls);
PollRoute.get('/poll/:id', PollController.getPollById);
PollRoute.post('/poll', PollController.postPoll);


export default PollRoute;