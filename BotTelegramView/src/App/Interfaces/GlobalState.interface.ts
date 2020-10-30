import { AuthStateInterface } from "./AuthStates.interface";
import { PollStateInterface } from "./PollStates.interface";
import { UserTypesStateInterface } from "./UserTypesState.interface";
import { BotSubsUsersStateInterface } from "./BotSubsUsersStates.interface"

export interface GlobalStateInterface {
  auth: AuthStateInterface;
  poll: PollStateInterface;
  userTypes: UserTypesStateInterface;
  botSubsUsers: BotSubsUsersStateInterface;
}