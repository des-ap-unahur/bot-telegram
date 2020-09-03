import BotResponsesFilesRepository from '../Entities/Repositories/BotResponsesFiles.repository';
import BotResponseFiles from '../Entities/Models/BotResponseFiles.model';
import { HttpStatus } from '../Config/Server/HTTPStatus.config';


class BotResponsesFilesController {
  getResponses = async (req: any, res: any): Promise<void> => {
      const botResponses: BotResponseFiles[] = await BotResponsesFilesRepository.getAll();
      res.send(botResponses);
  };

  getResponseById = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;
    
      const botResponse: BotResponseFiles = await BotResponsesFilesRepository.get(id);
      res.send(botResponse);
  };

  postResponse = async (req: any, res: any): Promise<void> => {
    const { body } = req;
      const botResponse: BotResponseFiles = await BotResponsesFilesRepository.post(body);
      res.send(botResponse);
  };

  updateResponse = async (req: any, res: any): Promise<void> => {
    const { body } = req;
    const { id } = req.params;
      const botResponse: BotResponseFiles = await BotResponsesFilesRepository.update(id, body);
      res.send(botResponse);
  };

  deleteResponse = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;
      await BotResponsesFilesRepository.delete(id);
      res.sendStatus(HttpStatus.OK);
  };
}

export default new BotResponsesFilesController();