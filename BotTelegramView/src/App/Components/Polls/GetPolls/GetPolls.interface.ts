import PollInterface from "../../../Interfaces/Poll.interface";
import UserTypes from "../../../Interfaces/UserTypes.interface";

export interface GetPollProps {
	fetching: boolean;
  polls: null | PollInterface[]
  pollSelected: null | PollInterface;
  userTypes: null | UserTypes[];
  fetchingUserTypes: boolean;
  total: number;
  sucess: boolean;
  selectPoll: (poll: null | PollInterface) => void;
  clearPollStates: () => void;
  getPollsRequest: (requestOptions: any) => void;
  deletePollRequest: (requestOptions: any) => void;
  updatePollRequest: (requestOptions: any) => void;
  postPollRequest: (requestOptions: any) => void;
  getUserTypesRequest: (requestOptions:any) => void;
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
  handleOpenPollPopUp: (poll?: PollInterface) => void;
  handleClosePollPopUp: () => void;
  handleSavePoll: () => Promise<void>;
  openPollPopUp: boolean;
}