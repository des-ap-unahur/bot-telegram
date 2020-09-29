import { TelegrafContext } from "telegraf/typings/context";
import GuaraniUsersInterface from "../../Interfaces/GuaraniUsers.interface";
import GuaraniUsersRepository from "../../Entities/Repositories/GuaraniUsers.repository";
import { botUserTypes } from "../Constants/Bot.constans";
import BotUsersInterface from "../../Interfaces/BotUsers.interface";
import BotUserRepository from "../../Entities/Repositories/BotUser.repository";
import BotUserTypeInterface from "../Interfaces/BotUserType.interface";


export const registrationUser = async (ctx: TelegrafContext) => {
  const phoneNumber: number = Number(ctx.update.message.contact.phone_number.substr(-10));
  const guaraniUser: GuaraniUsersInterface | null = await GuaraniUsersRepository.getByPhoneNumber(phoneNumber);
  const userType: BotUserTypeInterface | null = guaraniUser && botUserTypes.find(type => type.name === guaraniUser.profile);
  const genericUserType: BotUserTypeInterface = !userType && botUserTypes.pop();
  const telegram_user_id: number = ctx.update.message.contact.user_id;
  const hasRegistered: BotUsersInterface | null = await BotUserRepository.getByTelegramIdWithGuaraniUser(telegram_user_id);

  const botUser: BotUsersInterface = {
    user_type_id: userType ? userType.id : genericUserType.id,
    guarani_user_id: guaraniUser && guaraniUser.guarani_user_id,
    tel_user_id: ctx.update.message.contact.user_id,
    tel_last_name: ctx.update.message.contact.last_name,
    tel_first_name: ctx.update.message.contact.first_name,
    tel_username: ctx.update.message.contact.first_name
  }
  
  if(!hasRegistered){
    const registeredUser: BotUsersInterface = await BotUserRepository.post(botUser);

    return Object.assign(registeredUser, {phoneNumber, profile: guaraniUser.profile })
  }
  
  return Object.assign(botUser, {phoneNumber, profile: guaraniUser.profile })
}
