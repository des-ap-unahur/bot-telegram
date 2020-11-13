import UserBackOffice from "../Models/UserBackOffice.model";
import UserBackOfficeInterface from "../../Interfaces/UserBackOffice.interface";


class UserBackOfficeRepository {
  getAll = async (): Promise<UserBackOffice[]> => {
    const users: UserBackOffice[] = await UserBackOffice.findAll();
    return users;
  };

  get = async (id: number): Promise<UserBackOffice> => {
    const user: UserBackOffice = await UserBackOffice.findByPk(id);
    return user;
  };
  getByEmail = async (email: string): Promise<UserBackOffice> => {
    const user: UserBackOffice = await UserBackOffice.findOne({
      where: { email: email },
    });
    
    return user;
  };
  getByUsername = async (username: string): Promise<UserBackOffice> => {
    const user: UserBackOffice = await UserBackOffice.findOne({
      where: { username: username },
    });

    return user;
  };
  post = async (data: UserBackOfficeInterface): Promise<UserBackOfficeInterface> => {
    const user: UserBackOffice = await UserBackOffice.create(data);
    const {back_user_id, user_role_id, username, first_name, last_name,email} = user;
    
    return {back_user_id,user_role_id,username,first_name,last_name, email};
  };

  update = async (
    id: number,
    data: UserBackOfficeInterface
  ): Promise<UserBackOffice> => {
    const user: UserBackOffice = await UserBackOffice.findByPk(id);
    user.update(data);
    return user;
  };

  delete = async (id: number): Promise<void> => {
    const user: UserBackOffice = await UserBackOffice.findByPk(id);
    user.destroy();
  };
}

export default new UserBackOfficeRepository();
