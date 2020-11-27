import BotCommands from "../../Interfaces/BotComands.interface";
import PollInterface from "../../Interfaces/Poll.interface";

export interface DashboardProps {
  fetchingPoll: boolean;
  polls: PollInterface[] | null;
  fetchingBotCommands: boolean;
  botCommands: BotCommands[] | null;
  getPollsRequest: (requestParams: any) => void;
  getBotCommandsRequest: (requestParams: any) => void;
  refreshCommandsRequest: (requestParams: any) => void;
}