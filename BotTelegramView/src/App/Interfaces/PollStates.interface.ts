import PollInterface from "./Poll.interface";

export interface PollStateInterface {
  fetchingStatus: boolean;
  failed: boolean;
  sucess: boolean;
  polls: null | PollInterface[];
  total: number;
  statusCode: string | number;
  errorsCodes: string;
  errorMessage: string;
}