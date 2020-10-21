import PollInterface from "../../../Interfaces/Poll.interface";

export interface GetPollProps {
	fetching: boolean;
	polls: null | PollInterface[]
  total: number;
	sucess: boolean;
  clearPollStates: () => void;
  deletePollRequest: (requestOptions: any) => void;
	getPollsRequest: (requestOptions: any) => void;
}

export interface GetPollContentProps {
  polls: null | PollInterface[];
  language: any;
  total: number
  handleChangePage: (page: number, pageSize: number) => Promise<void>;
  handleDeletePoll: (id:number) => Promise<void>;
  fetching: boolean;
}