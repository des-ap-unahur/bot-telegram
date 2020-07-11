import Poll from "../Models/Poll.model";
import PollQuestion from "../Models/PollQuestions.model";
class PollRepository {

  getPolls = async (): Promise<any> => {
    const polls :Array<Poll> = await Poll.findAll();
    return polls;
  };

  getPoll = async (id: number): Promise<any> =>{
    const poll: Poll = await Poll.findByPk(id);
    return poll;
  }

  postPoll = async (obj:any): Promise<any>=>{
    const poll = await Poll.create(obj);
    return poll;
  }


}
export default new PollRepository();
