import GuaraniData from "../Models/GuaraniData.models";
import GuaraniDataInterface from "../Interfaces/GuaraniData.interface";

class GuaraniDataRepository {
  getAll = async (): Promise<GuaraniData[]> => {
    const guaraniData: GuaraniData[] = await GuaraniData.findAll();
    return guaraniData;
  };
  
  get = async (id: number): Promise<GuaraniData> => {
    const guaraniData: GuaraniData = await GuaraniData.findByPk(id);
    return guaraniData;
  };
  
  post = async (data: GuaraniDataInterface): Promise<GuaraniData> => {
    const guaraniData: GuaraniData = await GuaraniData.create(data);
    return guaraniData;
  }

  update = async (dni: number, data: GuaraniDataInterface): Promise<GuaraniData>=>{
    const guaraniData: GuaraniData = await GuaraniData.findByPk(dni);
    guaraniData.update(data);
    return guaraniData;
  }

  delete = async (id: number): Promise<void> =>{
    const guaraniData: GuaraniData = await GuaraniData.findByPk(id);
    guaraniData.destroy();
  }
}

export default new GuaraniDataRepository();