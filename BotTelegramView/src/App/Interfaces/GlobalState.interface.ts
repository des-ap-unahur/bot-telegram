import { AuthStateInterface } from "./AuthStates.interface";
import { PollStateInterface } from "./PollStates.interface";

export interface GlobalStateInterface {
  auth: AuthStateInterface;
  poll: PollStateInterface;
}