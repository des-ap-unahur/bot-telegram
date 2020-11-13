import { CommandTypeInterface } from "./CommandTypes.interface";

export interface CommandTypesStateInterface {
  fetchingStatus: boolean;
  failed: boolean;
  sucess: boolean;
  commandTypes: null | CommandTypeInterface[];
  statusCode: string | number;
  errorsCodes: string;
  errorMessage: string;
}