import BotSubsUsersInterface from "./BotSubsUsers.interface";
import UserTypes from "./UserTypes.interface";

export interface GuaraniUsersInterface {
  guarani_user_id: number;
  dni: number;
  emai: string;
  profile: string;
}

export interface BotUsersInterface {
  bot_user_id?: number | null;
  user_type_id: number;
  guarani_user_id?: number | null;
  tel_user_id: number;
  tel_last_name: string;
  tel_first_name: string;
  tel_username: string;
  guaraniUser?: GuaraniUsersInterface;
  userTypes: UserTypes;
}

export interface BotSubsUsersStateInterface {
  fetchingStatus: boolean;
  failed: boolean;
  sucess: boolean;
  botSubsUsers: null | BotSubsUsersInterface[];
  botUsers: null | BotUsersInterface[];
  total: number;
  totalSubscribers: number;
  newLastAdmission: number;
  statusCode: string | number;
  errorsCodes: string;
  errorMessage: string;
}
