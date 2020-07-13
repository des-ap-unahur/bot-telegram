import PollQuestionsRepository from "../Repositories/PollQuestions.repository";
import Poll from "../Models/Poll.model";

class PollController {
  getPollsQuestions = async (req: any, res: any): Promise<void> => {
    try {
      const poll: Poll[] = await PollQuestionsRepository.getAll();
      res.send(poll);
    } catch (e) {
      console.log(e);
    }
  };

  getPollQuestionsById = async (req: any, res: any): Promise<void> => {
    try {
      const pollQuestions = await PollQuestionsRepository.get(req.params.id);
      res.send(pollQuestions);
    } catch (e) {
      console.log(e);
    }
  };

  postPollQuestions = async (req: any, res: any): Promise<void> => {
    const questions = await PollQuestionsRepository.post(req.body);
    res.send(questions);
  };
}
export default new PollController();
