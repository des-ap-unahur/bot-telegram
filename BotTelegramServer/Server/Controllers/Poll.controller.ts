import PollRepository from "../Entities/Repositories/Poll.repository";
import Poll from "../Entities/Models/Poll.model";
import notFoundValidator from "../Utils/NotFoundValidator.utils";
import execDelete from "../Utils/ExecDelete.utils";


class PollController {
  getPolls = async (req: any, res: any): Promise<void> => {
    const polls: Poll[] = await PollRepository.getAll();
    res.send(polls);
  };

  getPollById = async (req: any, res: any): Promise<void>=>{
    const { id } = req.params;

    const poll: Poll = await PollRepository.get(id);
    notFoundValidator(res, poll);
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

    await execDelete(res, async () => {
      await PollRepository.delete(id);
    })
  };
}

export default new PollController();
