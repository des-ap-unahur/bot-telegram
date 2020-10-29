import { AuthStateInterface } from "./AuthStates.interface";
import { PollStateInterface } from "./PollStates.interface";
import { UserTypesStateInterface } from "./UserTypesState.interface";
import { RegisteredUserStateInterface } from "./RegisteredUserStates.interface";


export interface GlobalStateInterface {
  auth: AuthStateInterface;
  poll: PollStateInterface;
  userTypes: UserTypesStateInterface;
  registeredUser: RegisteredUserStateInterface;
}