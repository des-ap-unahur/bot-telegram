import ResponseInterface from "../Responses/Response.interface";
import ResponseFilesInterface from "../Responses/ResponseFiles.interface";

interface ResponseStates {
  fetchingStatus: boolean;
  failed: boolean;
  sucess: boolean;
  response: null | ResponseInterface;
  responseFiles: null | ResponseFilesInterface;
  statusCode: string | number;
  errorsCodes: string;
  errorMessage: string;
}

export default ResponseStates;