import UserBackOfficeInterface from "../Interfaces/UserBackOffice.interface";
import UserInterface from "../Interfaces/UserBackOffice.interface";
import LoginUserInterface from "../Interfaces/LoginUser.interface";
import UserBackOfficeRepository from "../Entities/Repositories/UserBackOffice.repository";
import { UserWording } from "../Config/Constants/Wording/User.wording";
import {
  encryptPassword,
  compareLogin,
  createToken,
} from "../Utils/Auth.utils";
import { HttpStatus } from "../Config/Server/HTTPStatus.config";

const { UserIsInUse, MailIsInUse, ErrorWithUserNameOrPass, UserDoesNotExist } = UserWording;

class Auth {
  register = async (req, res): Promise<void> => {
    const newUser: UserInterface = req.body;
    if (!await this.userOrMailExist(newUser, res)) {
      await encryptPassword(newUser);
      const user = await UserBackOfficeRepository.post(newUser);
      res.status(HttpStatus.OK).send({
        token: createToken(newUser, process.env.SECRET_KEY, "24h"),
        user: user,
      });
    }
  };

  login = async (req, res): Promise<void> => {

    const userLogin: LoginUserInterface = req.body;
    const { username, password } = userLogin;
    const userFound = await UserBackOfficeRepository.getByUsername(username);
    const passwordSucces = await this.passwordSuccess(password, userFound, res);
    if (passwordSucces) {
      const { back_user_id, user_role_id, username, first_name, last_name, email } = userFound;
      res.send({
        token: createToken(userFound, process.env.SECRET_KEY, "24h"),
        user: { back_user_id, user_role_id, username, first_name, last_name, email }
      });
    }
  };

  userOrMailExist = async ({ email, username }, res: any) => {
    const foundUser = await UserBackOfficeRepository.getByUsername(username);
    const foundEmail = await UserBackOfficeRepository.getByEmail(email);

    if (foundUser) {
      res.status(HttpStatus.OK).send({ message: UserIsInUse });
      return foundUser;
    }

    if (foundEmail) {
      res.status(HttpStatus.OK).send({ message: MailIsInUse });
      return foundEmail;
    }
    return (foundUser && foundEmail);
  }

  passwordSuccess = async (password: string, userFound: UserBackOfficeInterface, res: any) => {

    if (!userFound) {
      res.status(HttpStatus.BAD_REQUEST).send({ message: ErrorWithUserNameOrPass });
      return null;
    }

    const passwordSuccess = await compareLogin(password, userFound);
    
    if (!passwordSuccess) {
      res.status(HttpStatus.BAD_REQUEST).send({ message: ErrorWithUserNameOrPass });
    }

    return passwordSuccess;
  }
}

export default new Auth();
