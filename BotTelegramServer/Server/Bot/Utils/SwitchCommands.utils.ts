import { TelegrafContext } from "telegraf/typings/context";
import BotUsers from "../../Entities/Models/BotUsers.model";
import { userTypes } from "../Constants/Bot.constans";
import CommandInterface from "../Interfaces/Command.interface";

export const switchCommands = async (ctx: TelegrafContext, commands: any, users: BotUsers[], callBack: (commands: CommandInterface[], user: BotUsers | null) => void) => {
  const telegram_user_id: number = ctx.message.chat.id;
  const {
    comunityCommands,
    studentCommands,
    teacherCommands
  } = commands;
  const user = users.find(user => user.tel_user_id === telegram_user_id)
  
  if(user && user.user_type_id === userTypes.student){
    await callBack(studentCommands, user);
  } else if (user && user.user_type_id === userTypes.teacher) {
    await callBack(teacherCommands, user);
  } else {
    await callBack(comunityCommands, null);
  }
}