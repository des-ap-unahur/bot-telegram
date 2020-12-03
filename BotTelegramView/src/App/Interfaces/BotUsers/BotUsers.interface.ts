import UserTypes from "../UserTypes/UserTypes.interface";
import GuaraniUsersInterface from '../GuaraniUsers/GuaraniUsers.interface';

interface BotUsersInterface {
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

export default BotUsersInterface;