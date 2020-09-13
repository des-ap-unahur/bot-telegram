import PollRepository from "../Entities/Repositories/Poll.repository";
import Poll from "../Entities/Models/Poll.model";
import notFoundValidator from "../Utils/NotFoundValidator.utils";
import execDelete from "../Utils/ExecDelete.utils";


class PollController {
  getPolls = async (req: any, res: any): Promise<void> => {
<<<<<<< HEAD
      const polls: Poll[] = await PollRepository.getAll();
      res.send(polls);
=======
    const polls: Poll[] = await PollRepository.getAll();
    res.send(polls);
>>>>>>> 1b751228436547fc2cfc77844904fb10e8a2e433
  };

  getPollById = async (req: any, res: any): Promise<void>=>{
    const { id } = req.params;
<<<<<<< HEAD
      const poll: Poll = await PollRepository.get(id);
      res.send(poll);
=======

    const poll: Poll = await PollRepository.get(id);
    notFoundValidator(res, poll);
>>>>>>> 1b751228436547fc2cfc77844904fb10e8a2e433
  }

  postPoll = async (req:any, res:any): Promise<void>=>{
    const { body } = req;
<<<<<<< HEAD
      const poll: Poll = await PollRepository.post(body);
      res.send(poll);
=======

    const poll: Poll = await PollRepository.post(body);
    res.send(poll);
>>>>>>> 1b751228436547fc2cfc77844904fb10e8a2e433
  }

  updatePoll = async (req: any, res: any): Promise<void> => {
    const { body } = req;
    const { id } = req.params;
<<<<<<< HEAD
      const poll: Poll = await PollRepository.update(id, body);
      res.send(poll);
=======

    const poll: Poll = await PollRepository.update(id, body);
    res.send(poll);
>>>>>>> 1b751228436547fc2cfc77844904fb10e8a2e433
  };

  deletePoll = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;
<<<<<<< HEAD
      await PollRepository.delete(id);
      res.sendStatus(HttpStatus.OK);
=======

    await execDelete(res, async () => {
      await PollRepository.delete(id);
    })
>>>>>>> 1b751228436547fc2cfc77844904fb10e8a2e433
  };
}

export default new PollController();
