import BotResponseFiles from "../Models/BotResponseFiles.model";
import BotResponseFilesInterface from "../Interfaces/BotResponseFiles.interface";

class BotResponseFilesRepository {
  getAll = async (): Promise<BotResponseFiles[]> => {
    const responses: BotResponseFiles[] = await BotResponseFiles.findAll();
    return responses;
  };
  
  get = async (id: number): Promise<BotResponseFiles> => {
    const response: BotResponseFiles = await BotResponseFiles.findByPk(id);
    return response;
  };
  
  post = async (data: BotResponseFilesInterface): Promise<BotResponseFiles> => {
    const response: BotResponseFiles = await BotResponseFiles.create(data);
    return response;
  }

  update = async (id: number, data: BotResponseFilesInterface): Promise<BotResponseFiles>=>{
    const response: BotResponseFiles = await BotResponseFiles.findByPk(id);
    response.update(data);
    return response;
  }

  delete = async (id: number): Promise<void> =>{
    const response: BotResponseFiles = await BotResponseFiles.findByPk(id);
    response.destroy();
  }
}

export default new BotResponseFilesRepository();