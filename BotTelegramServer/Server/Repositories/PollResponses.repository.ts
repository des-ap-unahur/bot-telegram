import PollResponses from "../Models/PollResponses.model";
import PollResponsesInterface from "../Interfaces/PollResponses.interface";

class PollResponsesRepository {
  getAll = async (): Promise<PollResponses[]> => {
    const pollResponses: PollResponses[] = await PollResponses.findAll();
    return pollResponses;
  };
  
  get = async (id: number): Promise<PollResponses> => {
    const pollResponse: PollResponses = await PollResponses.findByPk(id);
    return pollResponse;
  };
  
  post = async (data: PollResponsesInterface): Promise<PollResponses> => {
    const pollResponse: PollResponses = await PollResponses.create(data);
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