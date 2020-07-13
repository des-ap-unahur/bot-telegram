import PollResponsesRepository from "../Repositories/PollResponses.repository";
import PollResponses from "../Models/PollResponses.model";
import { HttpStatus } from '../Config/Server/HTTPStatus.config';

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

  postPollResponse = async (req: any, res: any): Promise<void> => {
    const { body } = req;
    try {
      const pollResponse: PollResponses = await PollResponsesRepository.post(body);
      res.sendStatus(pollResponse);
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
      res.sendStatus(pollResponse);
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