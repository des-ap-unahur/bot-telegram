import PollQuestionsRepository from "../Repositories/PollQuestions.repository";
import Poll from "../Models/Poll.model";

class PollController {
  getPollsQuestions = async (req: any, res: any): Promise<void> => {
    try {
      const poll = await PollQuestionsRepository.getPollsQuestions();
      res.send(poll);
    } catch (e) {
      console.log(e);
    }
  };

  getPollQuestionsById = async (req: any, res: any): Promise<void> => {
    try {
      const pollQuestions = await PollQuestionsRepository.getPollQuestionsById(req.params.id);
      res.send(pollQuestions);
    } catch (e) {
      console.log(e);
    }
  };

  postPollQuestions = async (req: any, res: any): Promise<void> => {
    const questions = await PollQuestionsRepository.postPollQuestions(req.body);
    res.send('Ok');
  };
}
export default new PollController();
