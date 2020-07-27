import Telegraf from 'telegraf';
import { TelegrafContext } from 'telegraf/typings/context';
import { typeCommands } from './TypeCommands.commands'; 
import BotCommandRepository from '../Repositories/BotCommand.repository';
import BotCommand from '../Models/BotCommands.model';
import { messageCommand } from './Message.command';
import { removeSensitiveCase } from '../Utils/RemoveSensitiveCase.utils';
import { buildContactCommand } from '../Utils/BuildContactCommand.utils';
import { assambleCommands } from '../Utils/AssambleCommands.utils';
import { callMail } from '../Utils/CallMail.utils';


export const buildCommands = async (bot: Telegraf<TelegrafContext>) => {
  const botCommands:BotCommand[] = await BotCommandRepository.getCommandsTypes();
  const commandsWithoutContact = botCommands.filter(command => command.commandsTypes.type !== "Contact")
  const contactCommand = buildContactCommand(botCommands);
  const commands = assambleCommands(commandsWithoutContact, typeCommands);
  let callMailCommand;
  let callMailHear;

  bot.on("contact", contactCommand)

  bot.on("message", (ctx:any) => {
    const { text } = ctx.message

    if(text){
      //Commands
      commands.map(
        command => removeSensitiveCase(command.command) === removeSensitiveCase(text) && command.response(ctx)
      )
      //Hears
      commands.map(
        command => removeSensitiveCase(command.message) === removeSensitiveCase(text) && command.response(ctx)
      )
      //Message if it can't find the command or hear
      !commands.some(
        command => removeSensitiveCase(command.command) === removeSensitiveCase(text) || 
        removeSensitiveCase(command.message) === removeSensitiveCase(text) ||
        Boolean(callMailCommand) ||
        Boolean(callMailHear)
      ) && messageCommand(ctx)
      //Mails Admin
      callMailCommand = callMail(callMailCommand, text, commands, ctx);
      callMailHear = callMail(callMailHear, text, commands, ctx);
    }
  })

  bot.launch();
}



