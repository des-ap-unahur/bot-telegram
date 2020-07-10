import { Router } from 'express';
import PollController from '../Controllers/Poll.controller';


const PollRoute = Router();



PollRoute.post('/encuesta', PollController.post);

PollRoute.get('/poll/:id/questions', PollController.getQuestions);





export default PollRoute;