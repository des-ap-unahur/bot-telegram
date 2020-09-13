import PollQuestionsRepository from "../Entities/Repositories/PollQuestions.repository";
import Poll from "../Entities/Models/Poll.model";
import PollQuestion from "../Entities/Models/PollQuestions.model";
import notFoundValidator from "../Utils/NotFoundValidator.utils";
import execDelete from "../Utils/ExecDelete.utils";


class PollQuestionsController {
  getPollsQuestions = async (req: any, res: any): Promise<void> => {
<<<<<<< HEAD
      const poll: Poll[] = await PollQuestionsRepository.getAll();
      res.send(poll);
=======
    const poll: Poll[] = await PollQuestionsRepository.getAll();
    res.send(poll);
>>>>>>> 1b751228436547fc2cfc77844904fb10e8a2e433
  };

  getPollQuestionsById = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;
<<<<<<< HEAD
      const pollQuestion: Poll = await PollQuestionsRepository.get(id);
      res.send(pollQuestion);
=======

    const pollQuestion: Poll = await PollQuestionsRepository.get(id);
    notFoundValidator(res, pollQuestion);
>>>>>>> 1b751228436547fc2cfc77844904fb10e8a2e433
  };

  postPollQuestions = async (req: any, res: any): Promise<void> => {
    const { body } = req;
<<<<<<< HEAD
      const pollQuestions: PollQuestion[] = await PollQuestionsRepository.post(body);
      res.send(pollQuestions);
=======
    
    const pollQuestions: PollQuestion[] = await PollQuestionsRepository.post(body);
    notFoundValidator(res, pollQuestions);
>>>>>>> 1b751228436547fc2cfc77844904fb10e8a2e433
  };

  updatePollQuestions = async (req: any, res: any): Promise<void> => {
    const { body } = req;
    const { id } = req.params;
<<<<<<< HEAD
      const pollQuestion: PollQuestion = await PollQuestionsRepository.update(id, body);
      res.send(pollQuestion);
=======

    const pollQuestion: PollQuestion = await PollQuestionsRepository.update(id, body);
    res.send(pollQuestion);
>>>>>>> 1b751228436547fc2cfc77844904fb10e8a2e433
  };

  deletePollQuestions = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;
<<<<<<< HEAD
      await PollQuestionsRepository.delete(id);
      res.sendStatus(HttpStatus.OK);
=======
    
    await execDelete(res, async () => {
      await PollQuestionsRepository.delete(id);
    })
>>>>>>> 1b751228436547fc2cfc77844904fb10e8a2e433
  };
}

export default new PollQuestionsController();
