import UserTypesInterface from "../UserTypes/UserTypes.interface";

interface UserTypesStateInterface {
  fetchingStatus: boolean;
  failed: boolean;
  sucess: boolean;
  userTypes: null | UserTypesInterface[];
  statusCode: string | number;
  errorsCodes: string;
  errorMessage: string;
}

export default UserTypesStateInterface;