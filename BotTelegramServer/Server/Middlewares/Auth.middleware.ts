import UserBackOfficeInterface from "../Entities/Interfaces/UserBackOffice.interface";
import UserInterface from "../Entities/Interfaces/UserBackOffice.interface";
import LoginUserInterface from "../Interfaces/LoginUser.interface";
import UserBackOfficeRepository from "../Entities/Repositories/UserBackOffice.repository";
import { loginWording } from "../Config/Constants/Wording/Login.wording";
import {
  encryptPassword,
  compareLogin,
  createToken,
} from "../Utils/Auth.utils";
import { HttpStatus } from "../Config/Server/HTTPStatus.config";
import { configServer } from "../Config/Server/Server.config";

const { userIsInUse, mailIsInUse, errorWithUserPassword, userDoesNotExist } = loginWording;

class Auth {
  register = async (req, res): Promise<void> => {
    const newUser: UserInterface = req.body;
    if (!await this.userOrMailExist(newUser, res)) {
      await encryptPassword(newUser);
      const user = await UserBackOfficeRepository.post(newUser);
      res.status(HttpStatus.OK).send({
        token: createToken(newUser, configServer.get('SECRET_KEY'), "24h"),
        user: user,
      });
    }
  };

  login = async (req, res): Promise<void> => {

    const userLogin: LoginUserInterface = req.body;
    const { username, password } = userLogin;
    const userFound = await UserBackOfficeRepository.getByUsername(username);
    const passwordSuccess = await this.passwordSuccess(password, userFound, res);
    if (passwordSuccess) {
      const { back_user_id, user_role_id, username, first_name, last_name, email } = userFound;
      res.send({
        token: createToken(userFound, configServer.get('SECRET_KEY'), "24h"),
        user: { back_user_id, user_role_id, username, first_name, last_name, email }
      });
    }
  };

  userOrMailExist = async ({ email, username }, res: any) => {
    const foundUser = await UserBackOfficeRepository.getByUsername(username);
    const foundEmail = await UserBackOfficeRepository.getByEmail(email);

    if (foundUser) {
      res.status(HttpStatus.OK).send({ message: userIsInUse });
      return foundUser;
    }

    if (foundEmail) {
      res.status(HttpStatus.OK).send({ message: mailIsInUse });
      return foundEmail;
    }
    return (foundUser && foundEmail);
  }

  passwordSuccess = async (password: string, userFound: UserBackOfficeInterface, res: any) => {

    if (!userFound) {
      res.status(HttpStatus.BAD_REQUEST).send({ message: userDoesNotExist });
      return userFound;
    }

    const passwordSuccess = await compareLogin(password, userFound);
    
    if (!passwordSuccess) {
      res.status(HttpStatus.BAD_REQUEST).send({ message: errorWithUserPassword });
    }

    return passwordSuccess;
  }
}

export default new Auth();
