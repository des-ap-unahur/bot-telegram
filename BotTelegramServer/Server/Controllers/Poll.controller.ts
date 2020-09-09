import PollRepository from "../Entities/Repositories/Poll.repository";
import Poll from "../Entities/Models/Poll.model";
import { HttpStatus } from '../Config/Server/HTTPStatus.config';


class PollController {
  getPolls = async (req: any, res: any): Promise<void> => {
    const polls: Poll[] = await PollRepository.getAll();
    res.send(polls);
  };

  getPollById = async (req: any, res: any): Promise<void>=>{
    const { id } = req.params;

    const poll: Poll = await PollRepository.get(id);
    res.send(poll);
  }

  postPoll = async (req:any, res:any): Promise<void>=>{
    const { body } = req;

    const poll: Poll = await PollRepository.post(body);
    res.send(poll);
  }

  updatePoll = async (req: any, res: any): Promise<void> => {
    const { body } = req;
    const { id } = req.params;

    const poll: Poll = await PollRepository.update(id, body);
    res.send(poll);
  };

  deletePoll = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;

    await PollRepository.delete(id);
    res.sendStatus(HttpStatus.OK);
  };
}

export default new PollController();
