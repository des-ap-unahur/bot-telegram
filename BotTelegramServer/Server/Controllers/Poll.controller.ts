import PollRepository from "../Repositories/Poll.repository";
import Poll from "../Models/Poll.model";

class PollController {
  
  getPolls = async (req: any, res: any): Promise<void> => {
    try {
      const polls = await PollRepository.getPolls();
      res.send(polls);
    } catch (e) {
      console.log(e);
    }
  };
}
export default new PollController();
