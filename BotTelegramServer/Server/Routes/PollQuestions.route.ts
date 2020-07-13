import { Router } from 'express';
import PollQuestionsController from '../Controllers/PollQuestions.controllers';

const PollRoute = Router();


PollRoute.get('/polls/questions', PollQuestionsController.getPollsQuestions);
PollRoute.get('/poll/:id/questions/', PollQuestionsController.getPollQuestionsById);
PollRoute.post('/poll/questions', PollQuestionsController.postPollQuestions);

export default PollRoute;