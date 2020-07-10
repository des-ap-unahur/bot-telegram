import { Router } from 'express';
import PollController from '../Controllers/Poll.controller';
const PollRoute = Router();


PollRoute.get('/polls', PollController.getPolls);
PollRoute.get('/poll/:id', PollController.getPollById);
PollRoute.get('/polls/questions', PollController.getPollsQuestions);
PollRoute.get('/poll/:id/questions', PollController.getPollQuestionsById);

export default PollRoute;