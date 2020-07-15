import Poll from "../Models/Poll.model";
import PollQuestion from "../Models/PollQuestions.model";
import PollQuestionInterface from "../Interfaces/PollQuestion.interface"

class PollRepository {
  getAll = async (): Promise<Poll[]> => {
    const pollsQuestions: Poll[] = await Poll.findAll({  include: [PollQuestion],});
    return pollsQuestions;
  };

  get = async (id: number): Promise<Poll> => {
    const pollsQuestions: Poll = await Poll.findByPk(id, {include: [PollQuestion],});
    return pollsQuestions;
  };

  post = async (data: PollQuestionInterface[]): Promise<PollQuestion[]> => {
    const pollQuestions = await PollQuestion.bulkCreate(data);
    return pollQuestions;
  };

  update = async (id: number, data: PollQuestionInterface): Promise<PollQuestion>=>{
    const pollQuestions: PollQuestion = await PollQuestion.findByPk(id);
    pollQuestions.update(data);
    return pollQuestions;
  }

  delete = async (id: number): Promise<void> =>{
    const pollQuestions: PollQuestion = await PollQuestion.findByPk(id);
    pollQuestions.destroy();
  }
}

export default new PollRepository();
