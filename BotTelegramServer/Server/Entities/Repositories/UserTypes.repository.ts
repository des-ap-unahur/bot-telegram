import UserTypes from "../Models/UserTypes.model";
import UserTypesInterface from "../../Interfaces/UserTypes.interface";


class UserTypesRepository {
  getAll = async (): Promise<UserTypes[]> => {
    const userTypes: UserTypes[] = await UserTypes.findAll();
    return userTypes;
  };

  get = async (id: number): Promise<UserTypes> => {
    const userType: UserTypes = await UserTypes.findByPk(id);
    return userType;
  }

  post = async (data:UserTypesInterface): Promise<UserTypes>=>{
    const userType = await UserTypes.create(data);
    return userType;
  }

  update = async (id: number, data: UserTypesInterface): Promise<UserTypes>=>{
    const userTypes: UserTypes = await UserTypes.findByPk(id);
    userTypes.update(data);
    return userTypes;
  }

  delete = async (id: number): Promise<void> =>{
    const userTypes: UserTypes = await UserTypes.findByPk(id);
    userTypes.destroy();
  }
}

export default new UserTypesRepository();