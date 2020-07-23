import Telegraf from 'telegraf';
import { TelegrafContext } from 'telegraf/typings/context';
import { typeCommands } from './TypeCommands.commands'; 
import BotCommandRepository from '../Repositories/BotCommand.repository';
import BotCommand from '../Models/BotCommands.model';
import { ContactType } from './ContactType.command';

export const buildCommands = async (bot: Telegraf<TelegrafContext>) => {
  const botCommands:BotCommand[] = await BotCommandRepository.getCommandsTypes();
  const commandsWithoutContact = botCommands.filter(command => command.commandsTypes.type !== "Contact")
  const buildContactCommand = () => {
    const commandContact = botCommands.find(command => command.commandsTypes.type === "Contact")
    return ContactType.generateCommand(commandContact) 
  }


  const commands = commandsWithoutContact.map(command => 
    { 
      const type = typeCommands.find(typeCommand => typeCommand.type === command.commandsTypes.type)
      const hasExternalParameter = command.commandsTypes.type === "NestedCommandsList";

      if(type){
        return !hasExternalParameter ?
          type.generateCommand(command)
        :
          type.generateCommand(
            command, 
            commandsWithoutContact.map(
              commandName => commandName.tel_command
            )
          )
      }
    } 
  )
  const commandStart = commands.find(command => typeof command === 'object' && command.message === "Start")
  
  bot.start(typeof commandStart === 'object' && commandStart.response);

  commands.map(command => typeof command === 'object' && bot.command(command.command, command.response))
  commands.map(command => typeof command === 'object' && bot.hears(command.message, command.response))

  bot.on("contact", buildContactCommand())
  bot.launch();
}



