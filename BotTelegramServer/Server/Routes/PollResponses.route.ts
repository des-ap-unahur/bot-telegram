import { Router } from 'express';
import PollResponsesController from '../Controllers/PollResponses.controller';

const PollResponsesRoute = Router();

PollResponsesRoute.get('/poll-responses', PollResponsesController.getPollsResponses);
PollResponsesRoute.get('/poll-responses/:id', PollResponsesController.getPollResponseById);
PollResponsesRoute.get('/poll/:id/responses', PollResponsesController.getPollResponsesById);
PollResponsesRoute.get('/question/:id/responses', PollResponsesController.getQuestionsResponses);
PollResponsesRoute.post('/poll-responses', PollResponsesController.postPollResponse);
PollResponsesRoute.delete('/poll-responses/:id', PollResponsesController.deletePollResponse);
PollResponsesRoute.put('/poll-responses/:id', PollResponsesController.updatePollResponse);

export default PollResponsesRoute;