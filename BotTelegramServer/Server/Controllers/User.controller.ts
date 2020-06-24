import User from '../Models/User.model';

class UserController {
  post = async (req: any, res: any): Promise<User> => {
    const user = await User.create(
      { username: req.body.username, email: req.body.email, password: req.body.password },
      { fields: ['username', 'email', 'password'] },
    );
    return user;
  }

  get = async (req: any, res: any): Promise<void> => {
    const users = await User.findAll();
    res.send(users);
  }
}

export default new UserController();