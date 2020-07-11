import Poll from "../Models/Poll.model";
import PollQuestion from "../Models/PollQuestions.model";
class PollRepository {
  getPollsQuestions = async (): Promise<any> => {
    const pollsQuestions: Array<Poll> = await Poll.findAll({  include: [PollQuestion],});
    return pollsQuestions;
  };

  getPollQuestionsById = async (id: number): Promise<any> => {
    const pollsQuestions: Poll = await Poll.findByPk(id, {include: [PollQuestion],});
    return pollsQuestions;
  };

  postPollQuestions = async (objs: Array<any>): Promise<any> => {
    const pollQuestions = await PollQuestion.bulkCreate(objs);
    return pollQuestions;
  };
  
}
export default new PollRepository();
