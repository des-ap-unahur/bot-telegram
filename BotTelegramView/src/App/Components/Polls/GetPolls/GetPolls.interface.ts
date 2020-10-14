import PollInterface from "../../../Interfaces/Poll.interface";

export interface GetPollProps {
	fetching: boolean;
	polls: null | PollInterface[]
  total: number;
	sucess: boolean;
	clearPollStates: () => void;
	getPollsRequest: (requestOptions: any) => void;
}

export interface GetPollContentProps {
  polls: null | PollInterface[];
  language: any;
  total: number
  handleChangePage: (page: number, pageSize: number) => Promise<void>;
  fetching: boolean;
}