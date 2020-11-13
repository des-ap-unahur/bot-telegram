import BotCommands from "./BotComands.interface";

export interface BotCommandStatesInterface {
  fetchingStatus: boolean;
  failed: boolean;
  sucess: boolean;
  botCommands: null | BotCommands[];
  botCommandList: null | BotCommands[];
  botCommandSelected: null | BotCommands;
  total: number;
  statusCode: string | number;
  errorsCodes: string;
  errorMessage: string;
}