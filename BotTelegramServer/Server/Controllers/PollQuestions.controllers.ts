import PollQuestionsRepository from "../Entities/Repositories/PollQuestions.repository";
import Poll from "../Entities/Models/Poll.model";
import { HttpStatus } from '../Config/Server/HTTPStatus.config';
import PollQuestion from "../Entities/Models/PollQuestions.model";
import PollQuestionInterface from "../Interfaces/PollQuestion.interface";


class PollQuestionsController {
  getPollsQuestions = async (req: any, res: any): Promise<void> => {
      const poll: Poll[] = await PollQuestionsRepository.getAll();
      res.send(poll);
  };

  getPollQuestionsById = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;
      const pollQuestion: Poll = await PollQuestionsRepository.get(id);
      res.send(pollQuestion);
  };

  postPollQuestions = async (req: any, res: any): Promise<void> => {
    const { body } = req;
      const pollQuestions: PollQuestion[] = await PollQuestionsRepository.post(body);
      res.send(pollQuestions);
  };

  updatePollQuestions = async (req: any, res: any): Promise<void> => {
    const { body } = req;
    const { id } = req.params;
      const pollQuestion: PollQuestion = await PollQuestionsRepository.update(id, body);
      res.send(pollQuestion);
  };

  deletePollQuestions = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;
      await PollQuestionsRepository.delete(id);
      res.sendStatus(HttpStatus.OK);
  };
}
export default new PollQuestionsController();
