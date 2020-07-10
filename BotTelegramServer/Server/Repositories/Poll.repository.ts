import Poll from "../Models/Poll.model";
import PollQuestion from "../Models/PollQuestion.model";
class PollRepository {

  getPolls = async (): Promise<any> => {
    const polls :Array<Poll> = await Poll.findAll();
    return polls;
  };

  getPoll = async (id: number): Promise<any> =>{
    const poll: Poll = await Poll.findOne({where: {poll_id: id}});
    return poll;
  }

  getPollsQuestions = async (): Promise<any> =>{
    const pollsQuestions :Array<Poll>= await Poll.findAll({include: [PollQuestion]});
    return pollsQuestions;
  }
  
  getPollQuestionsById = async (id: number): Promise<any> =>{
    const pollsQuestions :Poll= await Poll.findByPk(id,{include: [PollQuestion]});
    return pollsQuestions;
}

}
export default new PollRepository();
