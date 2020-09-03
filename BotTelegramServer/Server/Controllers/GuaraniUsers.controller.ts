import GuaraniUsersRepository from '../Entities/Repositories/GuaraniUsers.repository';
import GuaraniUsers from '../Entities/Models/GuaraniUsers.models';
import { HttpStatus } from '../Config/Server/HTTPStatus.config';


class GuaraniUsersController {
  getGuaraniUsers = async (req: any, res: any): Promise<void> => {
      const GuaraniUsers: GuaraniUsers[] = await GuaraniUsersRepository.getAll();
      res.send(GuaraniUsers);
  };

  getGuaraniUserById = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;
      const GuaraniUsers: GuaraniUsers = await GuaraniUsersRepository.get(id);
      res.send(GuaraniUsers);
  };

  postGuaraniUser = async (req: any, res: any): Promise<void> => {
    const { body } = req;
      const GuaraniUsers: GuaraniUsers = await GuaraniUsersRepository.post(body);
      res.send(GuaraniUsers);
  };

  updateGuaraniUser = async (req: any, res: any): Promise<void> => {
    const { body } = req;
    const { id } = req.params;
      const GuaraniUsers: GuaraniUsers = await GuaraniUsersRepository.update(id, body);
      res.send(GuaraniUsers);
  };

  deleteGuaraniUser = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;
      await GuaraniUsersRepository.delete(id);
      res.sendStatus(HttpStatus.OK);
  };
}

export default new GuaraniUsersController();