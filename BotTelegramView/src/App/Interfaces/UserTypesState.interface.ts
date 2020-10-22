import UserTypesInterface from "./UserTypes.interface";

export interface UserTypesStateInterface {
  fetchingStatus: boolean;
  failed: boolean;
  sucess: boolean;
  userTypes: null | UserTypesInterface[];
  statusCode: string | number;
  errorsCodes: string;
  errorMessage: string;
}