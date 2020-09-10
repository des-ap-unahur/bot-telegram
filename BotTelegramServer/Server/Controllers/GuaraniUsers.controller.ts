import GuaraniUsersRepository from '../Entities/Repositories/GuaraniUsers.repository';
import GuaraniUsers from '../Entities/Models/GuaraniUsers.models';
import notFoundValidator from '../Utils/NotFoundValidator.utils';
import execDelete from '../Utils/ExecDelete.utils';


class GuaraniUsersController {
  getGuaraniUsers = async (req: any, res: any): Promise<void> => {
    const guaraniUsers: GuaraniUsers[] = await GuaraniUsersRepository.getAll();
    res.send(guaraniUsers);
  };

  getGuaraniUserById = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;

    const guaraniUsers: GuaraniUsers = await GuaraniUsersRepository.get(id);
    notFoundValidator(res, guaraniUsers);
  };

  postGuaraniUser = async (req: any, res: any): Promise<void> => {
    const { body } = req;

    const guaraniUsers: GuaraniUsers = await GuaraniUsersRepository.post(body);
    res.send(guaraniUsers);
  };

  updateGuaraniUser = async (req: any, res: any): Promise<void> => {
    const { body } = req;
    const { id } = req.params;

    const guaraniUsers: GuaraniUsers = await GuaraniUsersRepository.update(id, body);
    res.send(guaraniUsers);
  };

  deleteGuaraniUser = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;

    await execDelete(res, async () => {
      await GuaraniUsersRepository.delete(id);
    })
  };
}

export default new GuaraniUsersController();