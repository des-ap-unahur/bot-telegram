import { AuthStateInterface } from "./AuthStates.interface";
import { PollStateInterface } from "./PollStates.interface";
import { UserTypesStateInterface } from "./UserTypesState.interface";
export interface GlobalStateInterface {
  auth: AuthStateInterface;
  poll: PollStateInterface;
  usertypes: UserTypesStateInterface;
}