import UserInterface from '../Auth/User.interface';

interface AuthStateInterface {
  lang: string;
  token: string;
  user: UserInterface | null;
  fetchingStatus: boolean;
  failed: boolean;
  sucess: boolean;
  statusCode: string | number;
  errorsCodes: string;
  errorMessage: string;
}

export default AuthStateInterface;