import { TelegrafContext } from "telegraf/typings/context";
import { botWording } from "../Constants/Wording/Bot.wording";

export const invalidMessageCommand = (ctx:TelegrafContext): void => {
  const { theAvailableCommandsAreIn } = botWording;
  ctx.reply(theAvailableCommandsAreIn);
}