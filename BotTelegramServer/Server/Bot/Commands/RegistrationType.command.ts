import { TelegrafContext } from "telegraf/typings/context";
import BotCommand from "../../Entities/Models/BotCommands.model";
import ContactButton from "../Markups/ContactButton.markup";
import { toCommand } from "../Utils/ToCommand.utils";
import BotUserRepository from "../../Entities/Repositories/BotUser.repository";
import BotUsers from "../../Entities/Models/BotUsers.model";

export const RegistrationType = {
  type: "Registration",
  generateCommand: (command: BotCommand) => {
    const { tel_command, name, botResponses } = command;
    const { response, parameter } = botResponses;
    return {
      command: toCommand(tel_command),
      message: name,
      response: async (ctx: TelegrafContext) => {
        const telegram_user_id: number = ctx.message.chat.id;
        const user: BotUsers | null = await BotUserRepository.getByTelegramIdWithGuaraniUser(
          telegram_user_id
        );
        if (!user) {
          ctx.reply(response, ContactButton(parameter));
        } else {
          ctx.reply("Usted ya esta registrado");
        }
      },
    };
  },
};
