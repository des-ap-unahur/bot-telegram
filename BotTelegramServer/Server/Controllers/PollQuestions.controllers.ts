import PollQuestionsRepository from "../Entities/Repositories/PollQuestions.repository";
import Poll from "../Entities/Models/Poll.model";
import { HttpStatus } from '../Config/Server/HTTPStatus.config';
import PollQuestion from "../Entities/Models/PollQuestions.model";
import PollQuestionInterface from "../Interfaces/PollQuestion.interface";


class PollQuestionsController {
  getPollsQuestions = async (req: any, res: any): Promise<void> => {
    try {
      const poll: Poll[] = await PollQuestionsRepository.getAll();
      res.send(poll);
    } catch (e) {
      res.send({
        errorCodes: e, 
        codeStatus: HttpStatus.INTERNAL_SERVER_ERROR
      });
    }
  };

  getPollQuestionsById = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;

    try {
      const pollQuestion: Poll = await PollQuestionsRepository.get(id);
      res.send(pollQuestion);
    } catch (e) {
      res.send({
        errorCodes: e, 
        codeStatus: HttpStatus.INTERNAL_SERVER_ERROR
      });
    }
  };

  postPollQuestions = async (req: any, res: any): Promise<void> => {
    const { body } = req;
    
    try {
      const pollQuestions: PollQuestion[] = await PollQuestionsRepository.post(body);
      res.send(pollQuestions);
    } catch (e) {
      res.send({
        errorCodes: e, 
        codeStatus: HttpStatus.INTERNAL_SERVER_ERROR
      });
    }
  };

  updatePollQuestions = async (req: any, res: any): Promise<void> => {
    const { body } = req;
    const { id } = req.params;

    try {
      const pollQuestion: PollQuestion = await PollQuestionsRepository.update(id, body);
      res.send(pollQuestion);
    } catch (e) {
      res.send({
        errorCodes: e, 
        codeStatus: HttpStatus.INTERNAL_SERVER_ERROR
      });
    }
  };

  deletePollQuestions = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;
    
    try {
      await PollQuestionsRepository.delete(id);
      res.sendStatus(HttpStatus.OK);
    } catch (e) {
      res.send({
        errorCodes: e, 
        codeStatus: HttpStatus.INTERNAL_SERVER_ERROR
      });
    }
  };
}
export default new PollQuestionsController();
