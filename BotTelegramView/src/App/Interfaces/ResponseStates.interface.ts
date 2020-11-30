import { ResponseInterface } from "./Response.interface";
import { ResponseFilesInterface } from "./ResponseFiles.interface";

export interface ResponseStates {
  fetchingStatus: boolean;
  failed: boolean;
  sucess: boolean;
  response: null | ResponseInterface;
  responseFiles: null | ResponseFilesInterface;
  statusCode: string | number;
  errorsCodes: string;
  errorMessage: string;
}