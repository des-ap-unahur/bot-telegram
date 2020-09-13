import RolesRepository from "../Entities/Repositories/Roles.repository";
import Roles from "../Entities/Models/Roles.model";
import notFoundValidator from "../Utils/NotFoundValidator.utils";
import execDelete from "../Utils/ExecDelete.utils";


class RolesController {
  getRoles = async (req: any, res: any): Promise<void> => {
    const roles: Roles[] = await RolesRepository.getAll();
    res.send(roles);
  };

  getRolById = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;

    const rol: Roles = await RolesRepository.get(id);
    notFoundValidator(res, rol);
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
    
    await execDelete(res, async () => {
      await RolesRepository.delete(id);
    })
  };
}

export default new RolesController();