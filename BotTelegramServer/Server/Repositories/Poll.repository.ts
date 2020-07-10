import Poll from "../Models/Poll.model";
import PollQuestion from "../Models/PollQuestion.model";
class PollRepository {

  getPolls = async (req: any): Promise<any> => {
    const polls :Array<Poll> = await Poll.findAll();
    return polls;
  };
}

export default new PollRepository();
