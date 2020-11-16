import { Router } from 'express';
import PollQuestionsController from '../Controllers/PollQuestions.controllers';
import validateRequest from '../Middlewares/RequestValidator.middleware';
import PollQuestionSchema from '../Entities/Schemas/PollQuestions.schema';

const PollRoute = Router();

PollRoute.get('/polls/questions', PollQuestionsController.getPollsQuestions);
PollRoute.get('/poll/:id/questions/', PollQuestionsController.getPollQuestionsById);
PollRoute.post('/poll/questions', validateRequest(PollQuestionSchema), PollQuestionsController.postPollQuestions);
PollRoute.delete('/poll/questions/:id', PollQuestionsController.deletePollQuestions);
PollRoute.put('/questions/:id', PollQuestionsController.updatePollQuestions);

export default PollRoute;