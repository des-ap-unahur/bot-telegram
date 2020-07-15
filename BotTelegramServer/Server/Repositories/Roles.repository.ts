import Roles from "../Models/Roles.model";
import RolesInterface from "../Interfaces/Roles.interface";

class RolesRepository {
  getAll = async (): Promise<Roles[]> => {
    const roles: Roles[] = await Roles.findAll();
    return roles;
  };
  
  get = async (id: number): Promise<Roles> => {
    const rol: Roles = await Roles.findByPk(id);
    return rol;
  };
  
  post = async (data: RolesInterface): Promise<Roles> => {
    const rol: Roles = await Roles.create(data);
    return rol;
  }

  update = async (id: number, data: RolesInterface): Promise<Roles>=>{
    const rol: Roles = await Roles.findByPk(id);
    rol.update(data);
    return rol;
  }

  delete = async (id: number): Promise<void> =>{
    const rol: Roles = await Roles.findByPk(id);
    rol.destroy();
  }
}

export default new RolesRepository();