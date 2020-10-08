import PollQuestionsRepository from "../Entities/Repositories/PollQuestions.repository";
import Poll from "../Entities/Models/Poll.model";
import PollQuestion from "../Entities/Models/PollQuestions.model";
import notFoundValidator from "../Utils/NotFoundValidator.utils";
import execDelete from "../Utils/ExecDelete.utils";

import PollWithPagination from "../Interfaces/PollWithPagination.interface";

class PollQuestionsController {
  getPollsQuestions = async (req: any, res: any): Promise<void> => {
    const paginationData = req.query;
    if (paginationData.page) {
      const poll: PollWithPagination = await PollQuestionsRepository.getAllWithPagination(paginationData);
      res.send(poll);
    } else {
      const poll:Poll[] = await PollQuestionsRepository.getAll();
      res.send(poll);
    }
  };

  getPollQuestionsById = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;
    const pollQuestion: Poll = await PollQuestionsRepository.get(id);
    notFoundValidator(res, pollQuestion);
  };

  postPollQuestions = async (req: any, res: any): Promise<void> => {
    const { body } = req;

    const pollQuestions: PollQuestion[] = await PollQuestionsRepository.post(
      body
    );
    notFoundValidator(res, pollQuestions);
  };

  updatePollQuestions = async (req: any, res: any): Promise<void> => {
    const { body } = req;
    const { id } = req.params;

    const pollQuestion: PollQuestion = await PollQuestionsRepository.update(
      id,
      body
    );
    res.send(pollQuestion);
  };

  deletePollQuestions = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;

    await execDelete(res, async () => {
      await PollQuestionsRepository.delete(id);
    });
  };
}

export default new PollQuestionsController();
