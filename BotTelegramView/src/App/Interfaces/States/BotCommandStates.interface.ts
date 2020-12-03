import BotCommands from "../Commands/BotComands.interface";

interface BotCommandStatesInterface {
  fetchingStatus: boolean;
  failed: boolean;
  sucess: boolean;
  botCommands: null | BotCommands[];
  botCommandList: null | BotCommands[];
  botCommandSelected: null | BotCommands;
  total: number;
  totalCommands: number;
  fetchingRefreshStatus: boolean;
  statusCode: string | number;
  errorsCodes: string;
  errorMessage: string;
}

export default BotCommandStatesInterface;