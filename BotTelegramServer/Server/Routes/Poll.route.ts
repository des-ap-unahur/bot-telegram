import { Router } from 'express';
import PollController from '../Controllers/Poll.controller';

const PollRoute = Router();

PollRoute.get('/encuestas', PollController.get);

export default PollRoute;