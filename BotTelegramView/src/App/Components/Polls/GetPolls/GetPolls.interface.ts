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
  openDeletePopUp: boolean;
  handleChangePage: (page: number, pageSize: number) => Promise<void>;
  handleDeletePoll: () => Promise<void>;
  handleOpenDeletePopUp: (id:number) => void;
  handleCloseDeletePopUp: () => void;
  fetching: boolean;
  handleOpenPollPopUp: () => void
}