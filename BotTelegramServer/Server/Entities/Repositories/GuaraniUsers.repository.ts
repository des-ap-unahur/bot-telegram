import GuaraniUsers from "../Models/GuaraniUsers.models";
import GuaraniUsersInterface from "../../Interfaces/GuaraniUsers.interface";


class GuaraniUsersRepository {
  getAll = async (): Promise<GuaraniUsers[]> => {
    const guaraniUsers: GuaraniUsers[] = await GuaraniUsers.findAll();
    return guaraniUsers;
  };
  
  get = async (id: number): Promise<GuaraniUsers> => {
    const guaraniUsers: GuaraniUsers = await GuaraniUsers.findByPk(id);
    return guaraniUsers;
  };
  
  post = async (data: GuaraniUsersInterface): Promise<GuaraniUsers> => {
    const guaraniUsers: GuaraniUsers = await GuaraniUsers.create(data);
    return guaraniUsers;
  }

  update = async (dni: number, data: GuaraniUsersInterface): Promise<GuaraniUsers>=>{
    const guaraniUsers: GuaraniUsers = await GuaraniUsers.findByPk(dni);
    guaraniUsers.update(data);
    return guaraniUsers;
  }

  delete = async (id: number): Promise<void> =>{
    const guaraniUsers: GuaraniUsers = await GuaraniUsers.findByPk(id);
    guaraniUsers.destroy();
  }
}

export default new GuaraniUsersRepository();