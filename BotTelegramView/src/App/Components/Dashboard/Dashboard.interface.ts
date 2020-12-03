import BotCommands from "../../Interfaces/Commands/BotComands.interface";
import PollInterface from "../../Interfaces/Polls/Poll.interface";

export interface DashboardProps {
  fetchingPoll: boolean;
  fetchingRefresh: boolean;
  polls: PollInterface[] | null;
  fetchingBotCommands: boolean;
  botCommands: BotCommands[] | null;
  totalCommands: number;
  totalSubscribers: number;
  newLastAdmission: number;
  totalPolls: number;
  getPollsRequest: (requestParams: any) => void;
  getBotCommandsRequest: (requestParams: any) => void;
  refreshCommandsRequest: (requestParams: any) => void;
  getTotalCommandsRequest: (requestParams: any) => void;
  getNewLastAdmissionRequest: (requestParams: any) => void;
  getTotalCountSubscribersRequest: (requestParams: any) => void;
  getTotalPollsRequest: (requestParams: any) => void;
}