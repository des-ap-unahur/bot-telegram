import UserTypes from "../../../Interfaces/UserTypes.interface";
import BotCommands from "../../../Interfaces/BotComands.interface";

export interface GetCommandsProps {
	fetching: boolean;
  botCommands: null | BotCommands[]
  botCommandSelected: null | BotCommands;
  userTypes: null | UserTypes[];
  fetchingUserTypes: boolean;
  total: number;
  sucess: boolean;
  selectBotCommand: (poll: null | BotCommands) => void;
  clearBotCommandsStates: () => void;
  getBotCommandsRequest: (requestOptions: any) => void;
  getUserTypesRequest: (requestOptions: any) => void;
  deleteBotCommand: (requestOptions: any) => void;
}

export interface GetCommandsContentProps {
  openDeletePopUp: boolean;
  handleDeleteBotCommand: () => Promise<void>;
  handleOpenDeletePopUp: (id: number) => void;
  handleCloseDeletePopUp: () => void;
  botCommands: null | BotCommands[]
  language: any;
  total: number
  handleChangePage: (page: number, pageSize: number) => Promise<void>; 
  fetching: boolean;
  openNewCommand: boolean;
  handleOpenNewCommand: (botCommands?: BotCommands | null) => void;
  handleCloseNewCommand: () => void;
}

export interface NewCommandProps {
  openNewCommand: boolean;
  handleCloseNewCommand: () => void;
  language: any;
}

export interface OptionInterface {
  id: number;
  name: string;
}

export interface InputQuestionsInterface {
  type: string;
  name: string;
  title: string;
  handleChange: any;
  value: string;
  correction: boolean;
}