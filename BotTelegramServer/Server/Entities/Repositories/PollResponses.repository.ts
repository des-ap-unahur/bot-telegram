import PollResponses from "../Models/PollResponses.model";
import PollResponsesInterface from "../../Interfaces/PollResponses.interface";
import PollQuestions from '../Models/PollQuestions.model';
import Poll  from '../Models/Poll.model';


class PollResponsesRepository {
  getAll = async (): Promise<PollResponses[]> => {
    const pollResponses: PollResponses[] = await PollResponses.findAll();
    return pollResponses;
  };
  
  get = async (id: number): Promise<PollResponses> => {
    const pollResponse: PollResponses = await PollResponses.findByPk(id);
    return pollResponse;
  };

  getPollResponses = async (id: number): Promise<Poll> => {
    const pollResponses: Poll = await Poll.findByPk(id,{include:[{model: PollQuestions, include:[PollResponses]}]});
    return pollResponses;
  };

  getQuestionsResponses = async (id: number): Promise<PollQuestions> => {
    const pollQuestionResponses: PollQuestions = await PollQuestions.findByPk(id,{include:[PollResponses]});
    return pollQuestionResponses;
  };
  
  post = async (data: PollResponsesInterface[]): Promise<PollResponses[]> => {
    const pollResponse: PollResponses [] = await PollResponses.bulkCreate(data);
    return pollResponse;
  }

  update = async (id: number, data: PollResponsesInterface): Promise<PollResponses>=>{
    const pollResponse: PollResponses = await PollResponses.findByPk(id);
    pollResponse.update(data);
    return pollResponse;
  }

  delete = async (id: number): Promise<void> =>{
    const pollResponse: PollResponses = await PollResponses.findByPk(id);
    pollResponse.destroy();
  }
}

export default new PollResponsesRepository();