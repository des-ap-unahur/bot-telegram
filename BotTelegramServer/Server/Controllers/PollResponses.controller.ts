import PollResponsesRepository from "../Entities/Repositories/PollResponses.repository";
import PollResponses from "../Entities/Models/PollResponses.model";
import Poll from '../Entities/Models/Poll.model';
import PollQuestions from '../Entities/Models/PollQuestions.model';
import notFoundValidator from "../Utils/NotFoundValidator.utils";
import execDelete from "../Utils/ExecDelete.utils";


class PollResponsesController {
  getPollsResponses = async (req: any, res: any): Promise<void> => {
    const pollResponses: PollResponses[] = await PollResponsesRepository.getAll();
    res.send(pollResponses);
  };
  
  getPollResponseById = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;
<<<<<<< HEAD
      const pollResponse: PollResponses = await PollResponsesRepository.get(id);
      res.send(pollResponse);
=======
    
    const pollResponse: PollResponses = await PollResponsesRepository.get(id);
    notFoundValidator(res, pollResponse);
>>>>>>> 1b751228436547fc2cfc77844904fb10e8a2e433
  };

  getPollResponsesById = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;
<<<<<<< HEAD
      const pollResponses: Poll = await PollResponsesRepository.getPollResponses(id);
      res.send(pollResponses);
=======

    const pollResponses: Poll = await PollResponsesRepository.getPollResponses(id);
    notFoundValidator(res, pollResponses);
>>>>>>> 1b751228436547fc2cfc77844904fb10e8a2e433
  };

  getQuestionsResponses = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;
<<<<<<< HEAD
      const pollQuestionsResponses: PollQuestions = await PollResponsesRepository.getQuestionsResponses(id);
      res.send(pollQuestionsResponses);
=======

    const pollQuestionsResponses: PollQuestions = await PollResponsesRepository.getQuestionsResponses(id);
    res.send(pollQuestionsResponses);
>>>>>>> 1b751228436547fc2cfc77844904fb10e8a2e433
  };

  postPollResponse = async (req: any, res: any): Promise<void> => {
    const { body } = req;
<<<<<<< HEAD
      const pollResponse: PollResponses []= await PollResponsesRepository.post(body);
      res.send(pollResponse);
=======

    const pollResponse: PollResponses []= await PollResponsesRepository.post(body);
    res.send(pollResponse);
>>>>>>> 1b751228436547fc2cfc77844904fb10e8a2e433
  };

  updatePollResponse = async (req: any, res: any): Promise<void> => {
    const { body } = req;
    const { id } = req.params;
<<<<<<< HEAD
      const pollResponse: PollResponses = await PollResponsesRepository.update(id, body);
      res.send(pollResponse);
=======

    const pollResponse: PollResponses = await PollResponsesRepository.update(id, body);
    res.send(pollResponse);
>>>>>>> 1b751228436547fc2cfc77844904fb10e8a2e433
  };

  deletePollResponse = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;
<<<<<<< HEAD
      await PollResponsesRepository.delete(id);
      res.sendStatus(HttpStatus.OK);
=======

    await execDelete(res, async () => {
      await PollResponsesRepository.delete(id);
    })
>>>>>>> 1b751228436547fc2cfc77844904fb10e8a2e433
  };
}

export default new PollResponsesController();