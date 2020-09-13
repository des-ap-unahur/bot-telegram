import GuaraniUsersRepository from '../Entities/Repositories/GuaraniUsers.repository';
import GuaraniUsers from '../Entities/Models/GuaraniUsers.models';
import notFoundValidator from '../Utils/NotFoundValidator.utils';
import execDelete from '../Utils/ExecDelete.utils';


class GuaraniUsersController {
  getGuaraniUsers = async (req: any, res: any): Promise<void> => {
<<<<<<< HEAD
      const GuaraniUsers: GuaraniUsers[] = await GuaraniUsersRepository.getAll();
      res.send(GuaraniUsers);
=======
    const guaraniUsers: GuaraniUsers[] = await GuaraniUsersRepository.getAll();
    res.send(guaraniUsers);
>>>>>>> 1b751228436547fc2cfc77844904fb10e8a2e433
  };

  getGuaraniUserById = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;
<<<<<<< HEAD
      const GuaraniUsers: GuaraniUsers = await GuaraniUsersRepository.get(id);
      res.send(GuaraniUsers);
=======

    const guaraniUsers: GuaraniUsers = await GuaraniUsersRepository.get(id);
    notFoundValidator(res, guaraniUsers);
>>>>>>> 1b751228436547fc2cfc77844904fb10e8a2e433
  };

  postGuaraniUser = async (req: any, res: any): Promise<void> => {
    const { body } = req;
<<<<<<< HEAD
      const GuaraniUsers: GuaraniUsers = await GuaraniUsersRepository.post(body);
      res.send(GuaraniUsers);
=======

    const guaraniUsers: GuaraniUsers = await GuaraniUsersRepository.post(body);
    res.send(guaraniUsers);
>>>>>>> 1b751228436547fc2cfc77844904fb10e8a2e433
  };

  updateGuaraniUser = async (req: any, res: any): Promise<void> => {
    const { body } = req;
    const { id } = req.params;
<<<<<<< HEAD
      const GuaraniUsers: GuaraniUsers = await GuaraniUsersRepository.update(id, body);
      res.send(GuaraniUsers);
=======

    const guaraniUsers: GuaraniUsers = await GuaraniUsersRepository.update(id, body);
    res.send(guaraniUsers);
>>>>>>> 1b751228436547fc2cfc77844904fb10e8a2e433
  };

  deleteGuaraniUser = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;
<<<<<<< HEAD
      await GuaraniUsersRepository.delete(id);
      res.sendStatus(HttpStatus.OK);
=======

    await execDelete(res, async () => {
      await GuaraniUsersRepository.delete(id);
    })
>>>>>>> 1b751228436547fc2cfc77844904fb10e8a2e433
  };
}

export default new GuaraniUsersController();