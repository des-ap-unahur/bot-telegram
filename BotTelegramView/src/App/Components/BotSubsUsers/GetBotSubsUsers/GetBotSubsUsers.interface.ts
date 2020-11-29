import { BotUsersInterface } from "../../../Interfaces/BotSubsUsersStates.interface";

export interface GetBotSubsUsersProps {
  fetching: boolean;
  botUsers: null | BotUsersInterface[];
  total: number;
  sucess: boolean;
  getBotUsersRequest: (requestOptions: any) => void;
}

export interface GetBotSubsUsersContentProps {
  botUsers: null | BotUsersInterface[];
  language: any;
  total:  number;
  handleChangePage: (page: number, pageSize: number) => Promise<void>;
  fetching: boolean;
}