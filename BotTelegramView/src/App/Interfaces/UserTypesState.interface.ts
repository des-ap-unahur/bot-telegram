import UserTypesInterface from "./UserTypes.interface";

export interface UserTypesStateInterface {
  fetchingStatus: boolean;
  failed: boolean;
  sucess: boolean;
  userTypeSelected: null | UserTypesInterface;
  userTypes: null | UserTypesInterface[];
  total: number;
  statusCode: string | number;
  errorsCodes: string;
  errorMessage: string;
}