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
  userTypes: null | UserTypes[];
  handleChangeInputs: (e: any) => void;
  name: string;
  description: string;
  userTypeId: number | string;
  emptyFields: boolean;
  userTypesList: OptionInterface[] | null;
  numberOfQuestions: string | number;
  questions: QuestionInterface[];
  handleChangeInputQuestions: (e: any, indexQuestion: number) => void;
  confirmation: boolean;
}

export interface NewPollProps {
  handleClose: () => void;
  handleSave: () => Promise<void>;
  open: boolean;
  fetching: boolean
  userTypes: null | UserTypes[];
  handleChangeInputs: (e: any) => void;
  name: string;
  description: string;
  userTypeId: number | string;
  emptyFields: boolean;
  userTypesList: OptionInterface[] | null;
  numberOfQuestions: string | number;
  questions: QuestionInterface[];
  handleChangeInputQuestions: (e: any, indexQuestion: number) => void;
  confirmation: boolean;
}

export interface OptionInterface {
  id: number;
  name: string;
}

export interface PollQuestionInterface {
  poll_id: null | number;
  question: string;
  description: string;
}

export interface QuestionInterface {
  poll_id: number | string;
	question: string; 
	description: string;
}

export interface InputQuestionsInterface {
  type: string;
  name: string;
  title: string;
  handleChange: any;
  value: string;
  correction: boolean;
}