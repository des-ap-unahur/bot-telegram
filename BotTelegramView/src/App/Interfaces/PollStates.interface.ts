import PollInterface from "./Poll.interface";

export interface PollStateInterface {
  fetchingStatus: boolean;
  failed: boolean;
  sucess: boolean;
  pollSelected: null | PollInterface;
  polls: null | PollInterface[];
  total: number;
  totalPolls: number;
  statusCode: string | number;
  errorsCodes: string;
  errorMessage: string;
}