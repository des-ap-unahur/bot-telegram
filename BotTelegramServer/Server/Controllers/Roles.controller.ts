import RolesRepository from "../Repositories/Roles.repository";
import Roles from "../Models/Roles.model";
import { HttpStatus } from '../Config/Server/HTTPStatus.config';

class RolesController {
  getRoles = async (req: any, res: any): Promise<void> => {
    try {
      const roles: Roles[] = await RolesRepository.getAll();
      res.send(roles);
    } catch (e) {
      res.send({
        errorCodes: e, 
        codeStatus: HttpStatus.INTERNAL_SERVER_ERROR
      });
    }
  };

  getRolById = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;

    try {
      const rol: Roles = await RolesRepository.get(id);
      res.send(rol);
    } catch (e) {
      res.send({
        errorCodes: e, 
        codeStatus: HttpStatus.INTERNAL_SERVER_ERROR
      });
    }
  };

  postRol = async (req: any, res: any): Promise<void> => {
    const { body } = req;

    try {
      const rol: Roles = await RolesRepository.post(body);
      res.sendStatus(rol);
    } catch (e) {
      res.send({
        errorCodes: e, 
        codeStatus: HttpStatus.INTERNAL_SERVER_ERROR
      });
    }
  };

  updateRol = async (req: any, res: any): Promise<void> => {
    const { body } = req;
    const { id } = req.params;

    try {
      const rol: Roles = await RolesRepository.update(id, body);
      res.sendStatus(rol);
    } catch (e) {
      res.send({
        errorCodes: e, 
        codeStatus: HttpStatus.INTERNAL_SERVER_ERROR
      });
    }
  };

  deleteRol = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;
    
    try {
      await RolesRepository.delete(id);
      res.sendStatus(HttpStatus.OK);
    } catch (e) {
      res.send({
        errorCodes: e, 
        codeStatus: HttpStatus.INTERNAL_SERVER_ERROR
      });
    }
  };
}

export default new RolesController();