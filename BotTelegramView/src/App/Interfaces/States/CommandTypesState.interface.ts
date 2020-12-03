import CommandTypeInterface from "../CommandTypes/CommandTypes.interface";

interface CommandTypesStateInterface {
  fetchingStatus: boolean;
  failed: boolean;
  sucess: boolean;
  commandTypes: null | CommandTypeInterface[];
  statusCode: string | number;
  errorsCodes: string;
  errorMessage: string;
}

export default CommandTypesStateInterface;