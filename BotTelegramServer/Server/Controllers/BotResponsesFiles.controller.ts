import BotResponsesFilesRepository from '../Entities/Repositories/BotResponsesFiles.repository';
import BotResponseFiles from '../Entities/Models/BotResponseFiles.model';
import notFoundValidator from '../Utils/NotFoundValidator.utils';
import execDelete from '../Utils/ExecDelete.utils';


class BotResponsesFilesController {
  getResponses = async (req: any, res: any): Promise<void> => {
<<<<<<< HEAD
      const botResponses: BotResponseFiles[] = await BotResponsesFilesRepository.getAll();
      res.send(botResponses);
=======
    const botResponses: BotResponseFiles[] = await BotResponsesFilesRepository.getAll();
    res.send(botResponses);
>>>>>>> 1b751228436547fc2cfc77844904fb10e8a2e433
  };

  getResponseById = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;
    
<<<<<<< HEAD
      const botResponse: BotResponseFiles = await BotResponsesFilesRepository.get(id);
      res.send(botResponse);
=======
    const botResponse: BotResponseFiles = await BotResponsesFilesRepository.get(id);
    notFoundValidator(res, botResponse);
>>>>>>> 1b751228436547fc2cfc77844904fb10e8a2e433
  };

  postResponse = async (req: any, res: any): Promise<void> => {
    const { body } = req;
<<<<<<< HEAD
      const botResponse: BotResponseFiles = await BotResponsesFilesRepository.post(body);
      res.send(botResponse);
=======

    const botResponse: BotResponseFiles = await BotResponsesFilesRepository.post(body);
    res.send(botResponse);
>>>>>>> 1b751228436547fc2cfc77844904fb10e8a2e433
  };

  updateResponse = async (req: any, res: any): Promise<void> => {
    const { body } = req;
    const { id } = req.params;
<<<<<<< HEAD
      const botResponse: BotResponseFiles = await BotResponsesFilesRepository.update(id, body);
      res.send(botResponse);
=======

    const botResponse: BotResponseFiles = await BotResponsesFilesRepository.update(id, body);
    res.send(botResponse);
>>>>>>> 1b751228436547fc2cfc77844904fb10e8a2e433
  };

  deleteResponse = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;
<<<<<<< HEAD
      await BotResponsesFilesRepository.delete(id);
      res.sendStatus(HttpStatus.OK);
=======

    await execDelete(res, async () => {
      await BotResponsesFilesRepository.delete(id);
    })
>>>>>>> 1b751228436547fc2cfc77844904fb10e8a2e433
  };
}

export default new BotResponsesFilesController();