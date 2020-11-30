import { NestedCommandsInterface } from "./NestedCommands.interface";

export interface NestedCommandStatesInterface {
  fetchingStatus: boolean;
  failed: boolean;
  sucess: boolean;
  nestedCommands: null | NestedCommandsInterface[];
  statusCode: string | number;
  errorsCodes: string;
  errorMessage: string;
}