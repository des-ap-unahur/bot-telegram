import GuaraniDataRepository from '../Repositories/GuaraniData.repository';
import GuaraniData from '../Models/GuaraniData.models';
import { HttpStatus } from '../Config/Server/HTTPStatus.config';

class GuaraniDataController {
  getGuaraniUsers = async (req: any, res: any): Promise<void> => {
    try {
      const guaraniData: GuaraniData[] = await GuaraniDataRepository.getAll();
      res.send(guaraniData);
    } catch (e) {
      res.send({
        errorCodes: e, 
        codeStatus: HttpStatus.INTERNAL_SERVER_ERROR
      });
    }
  };

  getGuaraniUserById = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;
    
    try {
      const guaraniData: GuaraniData = await GuaraniDataRepository.get(id);
      res.send(guaraniData);
    } catch (e) {
      res.send({
        errorCodes: e, 
        codeStatus: HttpStatus.INTERNAL_SERVER_ERROR
      });
    }
  };

  postGuaraniUser = async (req: any, res: any): Promise<void> => {
    const { body } = req;

    try {
      const guaraniData: GuaraniData = await GuaraniDataRepository.post(body);
      res.send(guaraniData);
    } catch (e) {
      res.send({
        errorCodes: e, 
        codeStatus: HttpStatus.INTERNAL_SERVER_ERROR
      });
    }
  };

  updateGuaraniUser = async (req: any, res: any): Promise<void> => {
    const { body } = req;
    const { id } = req.params;

    try {
      const guaraniData: GuaraniData = await GuaraniDataRepository.update(id, body);
      res.send(guaraniData);
    } catch (e) {
      res.send({
        errorCodes: e, 
        codeStatus: HttpStatus.INTERNAL_SERVER_ERROR
      });
    }
  };

  deleteGuaraniUser = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;

    try {
      await GuaraniDataRepository.delete(id);
      res.sendStatus(HttpStatus.OK);
    } catch (e) {
      res.send({
        errorCodes: e, 
        codeStatus: HttpStatus.INTERNAL_SERVER_ERROR
      });
    }
  };
}

export default new GuaraniDataController();