import { botWording } from "../Constants/Wording/Bot.wording";

export const invalidMessageCommand = (ctx:any): void => {
  ctx.reply(botWording.theAvailableCommandsAreIn);
}