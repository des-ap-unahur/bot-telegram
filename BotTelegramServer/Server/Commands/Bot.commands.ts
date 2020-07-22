import { Extra } from 'telegraf';
import BotCommandRepository from '../Repositories/BotCommand.repository';
import BotCommand from '../Models/BotCommands.model';

export const botCommandStart = (ctx:any) => {ctx.reply(`¡Bienvenido al botTestUnahur!

  Características (por ahora):
  - Ubicacion de la unahur
  - Programas de carreras
  - Oferta Academica
  - Encuestas
  Recorda que tenes que registrarte para acceder a diferentes 
  acciones!
  
  *Primero te pido que te registres, podes hacerlo
   apretando aca /registrarme o escribiendo el comando.

  *Escribe /ayuda para ver los comando disponibles`)
}

export const typeCommandsGenerate = [
  {
    type: 1,
    generateCommand: (command: BotCommand) => {
      const { tel_command, parameter } = command;
      return {
        message: tel_command, 
        response: (ctx:any) => 
        {
          ctx.replyWithDocument(
            parameter
          );
        }
      }
    }
  },
  {
    type: 2,
    generateCommand: (command: BotCommand) => {
      const { tel_command, parameter } = command;
      return {
        message: tel_command, 
        response: (ctx:any) => 
        {
          ctx.replyWithLocation(
            parameter 
          );
        }
      }
    }
  },
  {
    type: 3,
    generateCommand: (command: BotCommand, externalParameter?:Array<any>) => {
      const { tel_command, description, parameter } = command;
      const list = parameter.split(',');
      return {
        message: tel_command, 
        response: (ctx:any) => 
        {
          console.log(ctx)
          ctx.reply(description,
            Extra.markup((markup) => {
              return markup.keyboard([
                externalParameter || list
              ])
              .oneTime()
              .resize()
              .extra()
            })
          );
        }
      }
    }
  },
]

export const buildCommands = async (bot) => {
  const botCommands = await BotCommandRepository.getCommandsTypes();
  const commands = await botCommands.map(command => 
    { 
      const type = typeCommandsGenerate.find(typeCommand => typeCommand.type === command.command_type_id)
      const hasExternalParameter = command.command_type_id === 3;
      if(type){
        return hasExternalParameter ?
          type.generateCommand(command)
        :
          type.generateCommand(
            command, 
            botCommands.map(
              commandName => commandName.tel_command
            )
          )
      }
    } 
  )
  commands.map(command => bot.command(command.message, command.response))
  commands.map(command => bot.hears(command.message, command.response))
}



