import BotResponsesFilesRepository from '../Entities/Repositories/BotResponsesFiles.repository';
import BotResponseFiles from '../Entities/Models/BotResponseFiles.model';
import { HttpStatus } from '../Config/Server/HTTPStatus.config';


class BotResponsesFilesController {
  getResponses = async (req: any, res: any): Promise<void> => {
    try {
      const botResponses: BotResponseFiles[] = await BotResponsesFilesRepository.getAll();
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
      const botResponse: BotResponseFiles = await BotResponsesFilesRepository.get(id);
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
      const botResponse: BotResponseFiles = await BotResponsesFilesRepository.post(body);
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
      const botResponse: BotResponseFiles = await BotResponsesFilesRepository.update(id, body);
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
      await BotResponsesFilesRepository.delete(id);
      res.sendStatus(HttpStatus.OK);
    } catch (e) {
      res.send({
        errorCodes: e, 
        codeStatus: HttpStatus.INTERNAL_SERVER_ERROR
      });
    }
  };
}

export default new BotResponsesFilesController();