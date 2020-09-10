import BotResponsesFilesRepository from '../Entities/Repositories/BotResponsesFiles.repository';
import BotResponseFiles from '../Entities/Models/BotResponseFiles.model';
import notFoundValidator from '../Utils/NotFoundValidator.utils';
import execDelete from '../Utils/ExecDelete.utils';


class BotResponsesFilesController {
  getResponses = async (req: any, res: any): Promise<void> => {
    const botResponses: BotResponseFiles[] = await BotResponsesFilesRepository.getAll();
    res.send(botResponses);
  };

  getResponseById = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;
    
    const botResponse: BotResponseFiles = await BotResponsesFilesRepository.get(id);
    notFoundValidator(res, botResponse);
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

    await execDelete(res, async () => {
      await BotResponsesFilesRepository.delete(id);
    })
  };
}

export default new BotResponsesFilesController();