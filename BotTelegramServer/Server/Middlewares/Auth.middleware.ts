import UserBackOfficeInterface from "../Entities/Interfaces/UserBackOffice.interface";
import UserInterface from "../Entities/Interfaces/UserBackOffice.interface";
import LoginUserInterface from "../Interfaces/LoginUser.interface";
import UserBackOfficeRepository from "../Entities/Repositories/UserBackOffice.repository";
import { loginWording } from "../Config/Constants/Wording/Login.wording";
import {
  encryptPassword,
  compareLogin,
  createToken,
  verifyToken
} from "../Utils/Auth.utils";
import { HttpStatus } from "../Config/Server/HTTPStatus.config";
import { configServer } from "../Config/Server/Server.config";
import { nonSecurePaths, timeToExpired } from "../Config/Auth/Auth.config";

const { userIsInUse, mailIsInUse, errorWithUserPassword, userDoesNotExist, sessionFinished } = loginWording;

class Auth {
  register = async (req, res): Promise<void> => {
    const newUser: UserInterface = req.body;
    if (!await this.userOrMailExist(newUser, res)) {
      await encryptPassword(newUser);
      const user = await UserBackOfficeRepository.post(newUser);
      res.status(HttpStatus.OK).send({
        token: createToken(newUser, configServer.get('SECRET_KEY'), timeToExpired),
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
        token: createToken(userFound, configServer.get('SECRET_KEY'), timeToExpired),
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

  verifyToken = async (req, res, next) =>  {
    const token = req.headers['x-access-token'];
    const { path } = req;
    
    if (nonSecurePaths.includes(path)) {
      return next();
    } else if (!token) {
      return res.status(HttpStatus.FORBIDDEN).send({ 
        auth: false, message: sessionFinished
      });
    }

    const decoded = verifyToken(String(token));
    req.userId = decoded.id;
    next();
  }
}

export default new Auth();
