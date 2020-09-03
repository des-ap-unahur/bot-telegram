import RolesRepository from "../Entities/Repositories/Roles.repository";
import Roles from "../Entities/Models/Roles.model";
import { HttpStatus } from '../Config/Server/HTTPStatus.config';


class RolesController {
  getRoles = async (req: any, res: any): Promise<void> => {
      const roles: Roles[] = await RolesRepository.getAll();
      res.send(roles);
  };

  getRolById = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;
      const rol: Roles = await RolesRepository.get(id);
      res.send(rol);
  };

  postRol = async (req: any, res: any): Promise<void> => {
    const { body } = req;
      const rol: Roles = await RolesRepository.post(body);
      res.send(rol);
  };

  updateRol = async (req: any, res: any): Promise<void> => {
    const { body } = req;
    const { id } = req.params;
      const rol: Roles = await RolesRepository.update(id, body);
      res.send(rol);
  };

  deleteRol = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;
      await RolesRepository.delete(id);
      res.sendStatus(HttpStatus.OK);
  };
}

export default new RolesController();