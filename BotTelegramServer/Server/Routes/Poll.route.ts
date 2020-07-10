import { Router } from 'express';
import PollController from '../Controllers/Poll.controller';

const PollRoute = Router();

PollRoute.get('/polls', PollController.getPolls);

export default PollRoute;