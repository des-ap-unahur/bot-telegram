import UserBackOffice from "../Models/UserBackOffice.model";
import UserBackOfficeInterface from "../Interfaces/UserBackOffice.interface";

class UserBackOfficeRepository {
  getAll = async (): Promise<UserBackOffice[]> => {
    const users: UserBackOffice[] = await UserBackOffice.findAll();
    return users;
  };
  
  get = async (id: number): Promise<UserBackOffice> => {
    const user: UserBackOffice = await UserBackOffice.findByPk(id);
    return user;
  };
  
  post = async (data: UserBackOfficeInterface): Promise<UserBackOffice> => {
    const user: UserBackOffice = await UserBackOffice.create(data);
    return user;
  }

  update = async (id: number, data: UserBackOfficeInterface): Promise<UserBackOffice>=>{
    const user: UserBackOffice = await UserBackOffice.findByPk(id);
    user.update(data);
    return user;
  }

  delete = async (id: number): Promise<void> =>{
    const user: UserBackOffice = await UserBackOffice.findByPk(id);
    user.destroy();
  }
}

export default new UserBackOfficeRepository();