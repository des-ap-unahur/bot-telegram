import RolesRepository from "../Entities/Repositories/Roles.repository";
import Roles from "../Entities/Models/Roles.model";
import notFoundValidator from "../Utils/NotFoundValidator.utils";
import execDelete from "../Utils/ExecDelete.utils";


class RolesController {
  getRoles = async (req: any, res: any): Promise<void> => {
<<<<<<< HEAD
      const roles: Roles[] = await RolesRepository.getAll();
      res.send(roles);
=======
    const roles: Roles[] = await RolesRepository.getAll();
    res.send(roles);
>>>>>>> 1b751228436547fc2cfc77844904fb10e8a2e433
  };

  getRolById = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;
<<<<<<< HEAD
      const rol: Roles = await RolesRepository.get(id);
      res.send(rol);
=======

    const rol: Roles = await RolesRepository.get(id);
    notFoundValidator(res, rol);
>>>>>>> 1b751228436547fc2cfc77844904fb10e8a2e433
  };

  postRol = async (req: any, res: any): Promise<void> => {
    const { body } = req;
<<<<<<< HEAD
      const rol: Roles = await RolesRepository.post(body);
      res.send(rol);
=======

    const rol: Roles = await RolesRepository.post(body);
    res.send(rol);
>>>>>>> 1b751228436547fc2cfc77844904fb10e8a2e433
  };

  updateRol = async (req: any, res: any): Promise<void> => {
    const { body } = req;
    const { id } = req.params;
<<<<<<< HEAD
      const rol: Roles = await RolesRepository.update(id, body);
      res.send(rol);
=======

    const rol: Roles = await RolesRepository.update(id, body);
    res.send(rol);
>>>>>>> 1b751228436547fc2cfc77844904fb10e8a2e433
  };

  deleteRol = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;
<<<<<<< HEAD
      await RolesRepository.delete(id);
      res.sendStatus(HttpStatus.OK);
=======
    
    await execDelete(res, async () => {
      await RolesRepository.delete(id);
    })
>>>>>>> 1b751228436547fc2cfc77844904fb10e8a2e433
  };
}

export default new RolesController();