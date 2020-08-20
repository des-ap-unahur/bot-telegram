import BotCommand from '../../Entities/Models/BotCommands.model';

export const ContactType = {
  type: "Contact",
  generateCommand: (command: BotCommand) => {
    const { description } = command;
    return (ctx:any) => 
      {
        const botParams = {
          ':name': ctx.update.message.contact.first_name,
          ':lastname': ctx.update.message.contact.last_name,
          ':phone_number': ctx.update.message.contact.phone_number.substr(-10),
          ':user_type': 'Publico General'
        }
        
        const buildMessage = () => {
          let message = description;
          const params = Object.keys(botParams);

          params.forEach(param => message = message.replace(param, botParams[param]));

          return message;
        }

        ctx.reply(buildMessage());
      }
  }
}