import PollResponsesRepository from "../Entities/Repositories/PollResponses.repository";
import PollResponses from "../Entities/Models/PollResponses.model";
import { HttpStatus } from '../Config/Server/HTTPStatus.config';
import Poll from '../Entities/Models/Poll.model';
import PollQuestions from '../Entities/Models/PollQuestions.model';


class PollResponsesController {
  getPollsResponses = async (req: any, res: any): Promise<void> => {
    try {
      const pollResponses: PollResponses[] = await PollResponsesRepository.getAll();
      res.send(pollResponses);
    } catch (e) {
      res.send({
        errorCodes: e, 
        codeStatus: HttpStatus.INTERNAL_SERVER_ERROR
      });
    }
  };
  
  getPollResponseById = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;
    
    try {
      const pollResponse: PollResponses = await PollResponsesRepository.get(id);
      res.send(pollResponse);
    } catch (e) {
      res.send({
        errorCodes: e, 
        codeStatus: HttpStatus.INTERNAL_SERVER_ERROR
      });
    }
  };

  getPollResponsesById = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;
    try {
      const pollResponses: Poll = await PollResponsesRepository.getPollResponses(id);
      res.send(pollResponses);
    } catch (e) {
      res.send({
        errorCodes: e, 
        codeStatus: HttpStatus.INTERNAL_SERVER_ERROR
      });
    }
  };

  getQuestionsResponses = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;
    try {
      const pollQuestionsResponses: PollQuestions = await PollResponsesRepository.getQuestionsResponses(id);
      res.send(pollQuestionsResponses);
    } catch (e) {
      res.send({
        errorCodes: e, 
        codeStatus: HttpStatus.INTERNAL_SERVER_ERROR
      });
    }
  };

  postPollResponse = async (req: any, res: any): Promise<void> => {
    const { body } = req;
    try {
      const pollResponse: PollResponses []= await PollResponsesRepository.post(body);
      res.send(pollResponse);
    } catch (e) {
      res.send({
        errorCodes: e, 
        codeStatus: HttpStatus.INTERNAL_SERVER_ERROR
      });
    }
  };

  updatePollResponse = async (req: any, res: any): Promise<void> => {
    const { body } = req;
    const { id } = req.params;

    try {
      const pollResponse: PollResponses = await PollResponsesRepository.update(id, body);
      res.send(pollResponse);
    } catch (e) {
      res.send({
        errorCodes: e, 
        codeStatus: HttpStatus.INTERNAL_SERVER_ERROR
      });
    }
  };

  deletePollResponse = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;

    try {
      await PollResponsesRepository.delete(id);
      res.sendStatus(HttpStatus.OK);
    } catch (e) {
      res.send({
        errorCodes: e, 
        codeStatus: HttpStatus.INTERNAL_SERVER_ERROR
      });
    }
  };
}

export default new PollResponsesController();