import { AuthStateInterface } from "./AuthStates.interface";
import { BotCommandStatesInterface } from "./BotCommandStates.interface";
import { PollStateInterface } from "./PollStates.interface";
import { UserTypesStateInterface } from "./UserTypesState.interface";
import { BotSubsUsersStateInterface } from "./BotSubsUsersStates.interface"
import { CommandTypesStateInterface } from "./CommandTypesState.interface";
import { ResponseStates } from "./ResponseStates.interface";
import { NestedCommandStatesInterface } from "./NestedCommandStates.interface";

export interface GlobalStateInterface {
  auth: AuthStateInterface;
  poll: PollStateInterface;
  userTypes: UserTypesStateInterface;
  botCommands: BotCommandStatesInterface;
  botSubsUsers: BotSubsUsersStateInterface;
  commandTypes: CommandTypesStateInterface;
  response: ResponseStates;
  nestedCommands: NestedCommandStatesInterface;
}