import BotResponsesRepository from '../Entities/Repositories/BotResponses.repository';
import BotResponse from '../Entities/Models/BotResponses.model';
import notFoundValidator from '../Utils/NotFoundValidator.utils';
import execDelete from '../Utils/ExecDelete.utils';


class BotResponsesController {
  getResponses = async (req: any, res: any): Promise<void> => {
    const botResponses: BotResponse[] = await BotResponsesRepository.getAll();
    res.send(botResponses);
  };

  getResponseById = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;
    
    const botResponse: BotResponse = await BotResponsesRepository.get(id);
    notFoundValidator(res, botResponse);
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

    await execDelete(res, async () => {
      await BotResponsesRepository.delete(id);
    })
  };
}

export default new BotResponsesController();
