import Poll from "../Models/Poll.model";
import PollInterface from "../../Interfaces/Poll.interface";
import PollQuestions from "../Models/PollQuestions.model";
import paginate from "../../Utils/Paginate.utils";
import PollWithPagination from "../../Interfaces/PollWithPagination.interface";
import UserTypes from "../Models/UserTypes.model";


class PollRepository {
  getAllWithPagination = async (paginationData: any): Promise<PollWithPagination> => {
    const { pageSize } = paginationData;
    const { count, rows: poll } = await Poll.findAndCountAll({
      include:[UserTypes],
      ...paginate(paginationData)
    });
    const total = Math.ceil(count / pageSize);
    return { total, poll };
  };

  getAll = async (): Promise<Poll[]> => {
    const polls: Poll[] = await Poll.findAll();
    return polls;
  };

  get = async (id: number): Promise<Poll> => {
    const poll: Poll = await Poll.findByPk(id);
    return poll;
  };

  post = async (data: PollInterface): Promise<Poll> => {
    const poll: Poll = await Poll.create(data);
    return poll;
  };

  update = async (id: number, data: PollInterface): Promise<Poll> => {
    const poll: Poll = await Poll.findByPk(id);
    poll.update(data);
    return poll;
  };

  delete = async (id: number): Promise<void> => {
    PollQuestions.destroy({ where: { poll_id: id } });
    Poll.destroy({ where: { poll_id: id } });
  };
}

export default new PollRepository();
