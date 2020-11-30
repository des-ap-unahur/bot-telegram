import { Router } from 'express';
import PollResponsesController from '../Controllers/PollResponses.controller';
import validateRequest from '../Middlewares/RequestValidator.middleware';
import PollResponseSchema from '../Entities/Schemas/PollResponses.schemas';

const PollResponsesRoute = Router();

PollResponsesRoute.get('/poll-responses', PollResponsesController.getPollsResponses);
PollResponsesRoute.get('/poll-responses/:id', PollResponsesController.getPollResponseById);
PollResponsesRoute.get('/poll/:id/responses', PollResponsesController.getPollResponsesById);
PollResponsesRoute.get('/question/:id/responses', PollResponsesController.getQuestionsResponses);
PollResponsesRoute.post('/poll-responses', validateRequest(PollResponseSchema), PollResponsesController.postPollResponse);
PollResponsesRoute.delete('/poll-responses/:id', PollResponsesController.deletePollResponse);
PollResponsesRoute.put('/poll-responses/:id', validateRequest(PollResponseSchema), PollResponsesController.updatePollResponse);

export default PollResponsesRoute;