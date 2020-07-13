import Poll from "../Models/Poll.model";
import PollInterface from "../Interfaces/Poll.interface"

class PollRepository {
  getAll = async (): Promise<Poll[]> => {
    const polls: Poll[] = await Poll.findAll();
    return polls;
  };

  get = async (id: number): Promise<Poll> =>{
    const poll: Poll = await Poll.findByPk(id);
    return poll;
  }

  post = async (data:PollInterface): Promise<Poll>=>{
    const poll: Poll = await Poll.create(data);
    return poll;
  }

  update = async (id: number, data: PollInterface): Promise<Poll>=>{
    const poll: Poll = await Poll.findByPk(id);
    poll.update(data);
    return poll;
  }

  delete = async (id: number): Promise<void> =>{
    const poll: Poll = await Poll.findByPk(id);
    poll.destroy();
  }
}

export default new PollRepository();
