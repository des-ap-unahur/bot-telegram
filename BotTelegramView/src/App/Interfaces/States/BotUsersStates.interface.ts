import BotUsersInterface from "../BotUsers/BotUsers.interface";


interface BotUsersStateInterface {
  fetchingStatus: boolean;
  failed: boolean;
  sucess: boolean;
  botUsers: null | BotUsersInterface[];
  total: number;
  totalSubscribers: number;
  newLastAdmission: number;
  statusCode: string | number;
  errorsCodes: string;
  errorMessage: string;
}

export default BotUsersStateInterface