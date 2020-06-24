import { Router } from 'express';
import PollController from '../Controllers/Poll.controller';

const PollRoute = Router();

PollRoute.get('/Polls', PollController.get);

export default PollRoute;