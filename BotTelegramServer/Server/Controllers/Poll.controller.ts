import PollRepository from "../Entities/Repositories/Poll.repository";
import Poll from "../Entities/Models/Poll.model";
import notFoundValidator from "../Utils/NotFoundValidator.utils";
import execDelete from "../Utils/ExecDelete.utils";
import { HttpStatus } from "../Config/Server/HTTPStatus.config";


class PollController {
  getPolls = async (req: any, res: any): Promise<void> => {
    const paginationData = req.query;
    if (paginationData.page) {
      const poll = await PollRepository.getAllWithPagination(paginationData);
      res.send(poll);
    } else {
      const poll:Poll[] = await PollRepository.getAll();
      res.send(poll);
    }
  };

  getPollById = async (req: any, res: any): Promise<void>=>{
    const { id } = req.params;

    const poll: Poll = await PollRepository.get(id);
    notFoundValidator(res, poll);
  }

  getCount = async (req: any, res: any): Promise<void> => {
    const count: number = await PollRepository.getCount();
    res.send({count}).status(HttpStatus.OK);
  };

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

  deletePoll = async (req: any, res: any): Promise<any> => {
    const { id } = req.params;

    await execDelete(res, async () => {
      const result=await PollRepository.delete(id);
      res.send(result);
    })
  };
}

export default new PollController();
