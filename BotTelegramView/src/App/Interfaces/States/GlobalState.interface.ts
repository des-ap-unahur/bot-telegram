import AuthStateInterface from "./AuthStates.interface";
import BotCommandStatesInterface from "./BotCommandStates.interface";
import PollStateInterface from "./PollStates.interface";
import UserTypesStateInterface from "./UserTypesState.interface";
import BotUsersStateInterface from "./BotUsersStates.interface"
import CommandTypesStateInterface from "./CommandTypesState.interface";
import ResponseStates from "./ResponseStates.interface";
import NestedCommandStatesInterface from "./NestedCommandStates.interface";

interface GlobalStateInterface {
  auth: AuthStateInterface;
  poll: PollStateInterface;
  userTypes: UserTypesStateInterface;
  botCommands: BotCommandStatesInterface;
  botUsers: BotUsersStateInterface;
  commandTypes: CommandTypesStateInterface;
  response: ResponseStates;
  nestedCommands: NestedCommandStatesInterface;
}

export default GlobalStateInterface;