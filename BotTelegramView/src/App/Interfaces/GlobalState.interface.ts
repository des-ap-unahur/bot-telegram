import { AuthStateInterface } from "./AuthStates.interface";
import { BotCommandStatesInterface } from "./BotCommandStates.interface";
import { PollStateInterface } from "./PollStates.interface";
import { UserTypesStateInterface } from "./UserTypesState.interface";


export interface GlobalStateInterface {
  auth: AuthStateInterface;
  poll: PollStateInterface;
  userTypes: UserTypesStateInterface;
  botCommands: BotCommandStatesInterface;
}