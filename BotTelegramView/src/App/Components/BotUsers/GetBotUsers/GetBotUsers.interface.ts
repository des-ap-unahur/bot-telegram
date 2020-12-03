import BotUsersInterface from "../../../Interfaces/BotUsers/BotUsers.interface";

export interface GetBotUsersProps {
  fetching: boolean;
  botUsers: null | BotUsersInterface[];
  total: number;
  sucess: boolean;
  getBotUsersRequest: (requestOptions: any) => void;
}

export interface GetBotUsersContentProps {
  botUsers: null | BotUsersInterface[];
  language: any;
  total:  number;
  handleChangePage: (page: number, pageSize: number) => Promise<void>;
  fetching: boolean;
}