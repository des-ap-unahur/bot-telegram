import Poll from "../Models/Poll.model";
import PollInterface from "../Interfaces/Poll.interface";
import PollQuestions from "../Models/PollQuestions.model";
class PollRepository {
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
