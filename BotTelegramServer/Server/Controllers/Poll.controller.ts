import PollRepository from "../Repositories/Poll.repository";
import Poll from "../Models/Poll.model";
import { HttpStatus } from '../Config/Server/HTTPStatus.config';

class PollController {
  getPolls = async (req: any, res: any): Promise<void> => {
    try {
      const polls: Poll[] = await PollRepository.getAll();
      res.send(polls);
    } catch (e) {
      res.send({
        errorCodes: e, 
        codeStatus: HttpStatus.INTERNAL_SERVER_ERROR
      });
    }
  };

  getPollById = async (req: any, res: any): Promise<void>=>{
    const { id } = req.params;

    try{
      const poll: Poll = await PollRepository.get(id);
      res.send(poll);
    } catch (e) {
      res.send({
        errorCodes: e, 
        codeStatus: HttpStatus.INTERNAL_SERVER_ERROR
      });
    }
  }

  postPoll = async (req:any, res:any): Promise<void>=>{
    const { body } = req;

    try {
      const poll: Poll = await PollRepository.post(body);
      res.send(poll);
    } catch (e) {
      res.send({
        errorCodes: e, 
        codeStatus: HttpStatus.INTERNAL_SERVER_ERROR
      });
    }
  }

  updatePoll = async (req: any, res: any): Promise<void> => {
    const { body } = req;
    const { id } = req.params;

    try {
      const poll: Poll = await PollRepository.update(id, body);
      res.sendStatus(poll);
    } catch (e) {
      res.send({
        errorCodes: e, 
        codeStatus: HttpStatus.INTERNAL_SERVER_ERROR
      });
    }
  };

  deletePoll = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;

    try {
      await PollRepository.delete(id);
      res.sendStatus(HttpStatus.OK);
    } catch (e) {
      res.send({
        errorCodes: e, 
        codeStatus: HttpStatus.INTERNAL_SERVER_ERROR
      });
    }
  };
}

export default new PollController();
