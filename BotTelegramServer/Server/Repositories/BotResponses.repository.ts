import BotResponses from "../Models/BotResponses.model";
import BotResponsesInterface from "../Interfaces/BotResponses.interface";

class BotResponsesRepository {
  getAll = async (): Promise<BotResponses[]> => {
    const responses: BotResponses[] = await BotResponses.findAll();
    return responses;
  };
  
  get = async (id: number): Promise<BotResponses> => {
    const response: BotResponses = await BotResponses.findByPk(id);
    return response;
  };
  
  post = async (data: BotResponsesInterface): Promise<BotResponses> => {
    const response: BotResponses = await BotResponses.create(data);
    return response;
  }

  update = async (id: number, data: BotResponsesInterface): Promise<BotResponses>=>{
    const response: BotResponses = await BotResponses.findByPk(id);
    response.update(data);
    return response;
  }

  delete = async (id: number): Promise<void> =>{
    const response: BotResponses = await BotResponses.findByPk(id);
    response.destroy();
  }
}

export default new BotResponsesRepository();