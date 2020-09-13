import BotResponsesRepository from '../Entities/Repositories/BotResponses.repository';
import BotResponse from '../Entities/Models/BotResponses.model';
import notFoundValidator from '../Utils/NotFoundValidator.utils';
import execDelete from '../Utils/ExecDelete.utils';


class BotResponsesController {
  getResponses = async (req: any, res: any): Promise<void> => {
<<<<<<< HEAD
      const botResponses: BotResponse[] = await BotResponsesRepository.getAll();
      res.send(botResponses);
=======
    const botResponses: BotResponse[] = await BotResponsesRepository.getAll();
    res.send(botResponses);
>>>>>>> 1b751228436547fc2cfc77844904fb10e8a2e433
  };

  getResponseById = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;
<<<<<<< HEAD
      const botResponse: BotResponse = await BotResponsesRepository.get(id);
      res.send(botResponse);
=======
    
    const botResponse: BotResponse = await BotResponsesRepository.get(id);
    notFoundValidator(res, botResponse);
>>>>>>> 1b751228436547fc2cfc77844904fb10e8a2e433
  };

  postResponse = async (req: any, res: any): Promise<void> => {
    const { body } = req;
<<<<<<< HEAD
      const botResponse: BotResponse = await BotResponsesRepository.post(body);
      res.send(botResponse);
=======

    const botResponse: BotResponse = await BotResponsesRepository.post(body);
    res.send(botResponse);
>>>>>>> 1b751228436547fc2cfc77844904fb10e8a2e433
  };

  updateResponse = async (req: any, res: any): Promise<void> => {
    const { body } = req;
    const { id } = req.params;
<<<<<<< HEAD
      const botResponse: BotResponse = await BotResponsesRepository.update(id, body);
      res.send(botResponse);
=======

    const botResponse: BotResponse = await BotResponsesRepository.update(id, body);
    res.send(botResponse);
>>>>>>> 1b751228436547fc2cfc77844904fb10e8a2e433
  };

  deleteResponse = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;
<<<<<<< HEAD
      await BotResponsesRepository.delete(id);
      res.sendStatus(HttpStatus.OK);
=======

    await execDelete(res, async () => {
      await BotResponsesRepository.delete(id);
    })
>>>>>>> 1b751228436547fc2cfc77844904fb10e8a2e433
  };
}

export default new BotResponsesController();
