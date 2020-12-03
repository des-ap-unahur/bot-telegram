import NestedCommandsInterface from "../NestedCommands/NestedCommands.interface";

interface NestedCommandStatesInterface {
  fetchingStatus: boolean;
  failed: boolean;
  sucess: boolean;
  nestedCommands: null | NestedCommandsInterface[];
  statusCode: string | number;
  errorsCodes: string;
  errorMessage: string;
}

export default NestedCommandStatesInterface;