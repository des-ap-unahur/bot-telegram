import Poll from "../Models/Poll.model";

class PollRepository {
  getPolls = async (): Promise<Poll[]> => {
    const polls: Poll[] = await Poll.findAll();
    return polls;
  };
}

export default new PollRepository();
