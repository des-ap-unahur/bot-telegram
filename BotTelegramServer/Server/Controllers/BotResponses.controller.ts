import BotResponsesRepository from '../Entities/Repositories/BotResponses.repository';
import BotResponse from '../Entities/Models/BotResponses.model';
import { HttpStatus } from '../Config/Server/HTTPStatus.config';


class BotResponsesController {
  getResponses = async (req: any, res: any): Promise<void> => {
      const botResponses: BotResponse[] = await BotResponsesRepository.getAll();
      res.send(botResponses);
  };

  getResponseById = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;
      const botResponse: BotResponse = await BotResponsesRepository.get(id);
      res.send(botResponse);
  };

  postResponse = async (req: any, res: any): Promise<void> => {
    const { body } = req;
      const botResponse: BotResponse = await BotResponsesRepository.post(body);
      res.send(botResponse);
  };

  updateResponse = async (req: any, res: any): Promise<void> => {
    const { body } = req;
    const { id } = req.params;
      const botResponse: BotResponse = await BotResponsesRepository.update(id, body);
      res.send(botResponse);
  };

  deleteResponse = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;
      await BotResponsesRepository.delete(id);
      res.sendStatus(HttpStatus.OK);
  };
}

export default new BotResponsesController();
