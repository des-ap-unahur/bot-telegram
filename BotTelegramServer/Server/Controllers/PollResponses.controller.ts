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
    
    const pollResponse: PollResponses = await PollResponsesRepository.get(id);
    notFoundValidator(res, pollResponse);
  };

  getPollResponsesById = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;

    const pollResponses: Poll = await PollResponsesRepository.getPollResponses(id);
    notFoundValidator(res, pollResponses);
  };

  getQuestionsResponses = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;

    const pollQuestionsResponses: PollQuestions = await PollResponsesRepository.getQuestionsResponses(id);
    res.send(pollQuestionsResponses);
  };

  postPollResponse = async (req: any, res: any): Promise<void> => {
    const { body } = req;

    const pollResponse: PollResponses []= await PollResponsesRepository.post(body);
    res.send(pollResponse);
  };

  updatePollResponse = async (req: any, res: any): Promise<void> => {
    const { body } = req;
    const { id } = req.params;

    const pollResponse: PollResponses = await PollResponsesRepository.update(id, body);
    res.send(pollResponse);
  };

  deletePollResponse = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;

    await execDelete(res, async () => {
      await PollResponsesRepository.delete(id);
    })
  };
}

export default new PollResponsesController();