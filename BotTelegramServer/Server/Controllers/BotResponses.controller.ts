import BotResponsesRepository from '../Repositories/BotResponses.repository';
import BotResponse from '../Models/BotResponses.model';
import { HttpStatus } from '../Config/Server/HTTPStatus.config';

class BotResponsesController {
  getResponses = async (req: any, res: any): Promise<void> => {
    try {
      const botResponses: BotResponse[] = await BotResponsesRepository.getAll();
      res.send(botResponses);
    } catch (e) {
      res.send({
        errorCodes: e, 
        codeStatus: HttpStatus.INTERNAL_SERVER_ERROR
      });
    }
  };

  getResponseById = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;
    
    try {
      const botResponse: BotResponse = await BotResponsesRepository.get(id);
      res.send(botResponse);
    } catch (e) {
      res.send({
        errorCodes: e, 
        codeStatus: HttpStatus.INTERNAL_SERVER_ERROR
      });
    }
  };

  postResponse = async (req: any, res: any): Promise<void> => {
    const { body } = req;

    try {
      const botResponse: BotResponse = await BotResponsesRepository.post(body);
      res.send(botResponse);
    } catch (e) {
      res.send({
        errorCodes: e, 
        codeStatus: HttpStatus.INTERNAL_SERVER_ERROR
      });
    }
  };

  updateResponse = async (req: any, res: any): Promise<void> => {
    const { body } = req;
    const { id } = req.params;

    try {
      const botResponse: BotResponse = await BotResponsesRepository.update(id, body);
      res.send(botResponse);
    } catch (e) {
      res.send({
        errorCodes: e, 
        codeStatus: HttpStatus.INTERNAL_SERVER_ERROR
      });
    }
  };

  deleteResponse = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;

    try {
      await BotResponsesRepository.delete(id);
      res.sendStatus(HttpStatus.OK);
    } catch (e) {
      res.send({
        errorCodes: e, 
        codeStatus: HttpStatus.INTERNAL_SERVER_ERROR
      });
    }
  };
}

export default new BotResponsesController();
