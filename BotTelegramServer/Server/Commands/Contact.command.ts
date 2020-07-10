import { people } from './people';
import { publicCommands } from './Public.commands';
import { studentsCommands } from './Students.commands';
import { teacherCommands } from './Teacher.commands';

export const contactCommand = (ctx:any, bot: any): void => {
  const phoneNumber = ctx.update.message.contact.phone_number
  const verifiedProfile = people.find(profile => profile.phone === phoneNumber.substr(-10))
  console.log(ctx.update.message.contact.phone_number);
  console.log(ctx.update.message.contact);

  if(Boolean(verifiedProfile)){
    if(verifiedProfile.isTeacher){
      teacherCommands.map(command => bot.command(command.command, command.response));
 
    }else{
      studentsCommands.map(command => bot.command(command.command, command.response));
    }
    console.log(verifiedProfile)
    ctx.reply(`Genial, pudimos verificar tu peril y quedo de la siguiente manera 
      NOMBRE   ---> ${verifiedProfile.name}
      APELLIDO ---> ${verifiedProfile.lastname}
      TELEFONO ---> ${verifiedProfile.phone}
      PERFIL   ---> ${verifiedProfile.isTeacher?' PROFESOR':' ALUMNO'}    
    `)
    ctx.reply(`Podes ver las funcionalidades que tenes con /ayuda`)
  }else{
    publicCommands.map(command => bot.command(command.command, command.response));
    ctx.reply(`Genial, pudimos verificar tu peril y quedo de la siguiente manera 
    NOMBRE   ---> ${ctx.update.message.contact.first_name}
    APELLIDO ---> ${ctx.update.message.contact.last_name}
    TELEFONO ---> ${ctx.update.message.contact.phone_number.substr(-10)}
    PERFIL   --->  PUBLICO GENERAL    `)
    ctx.reply(`Recorda actualizar tus datos en el siu para que en caso que 
    sea un error, puedas registrarte nuevamente y 
    poder acceder a otras funcionalidades`)
  
    ctx.reply(`Podes ver las funcionalidades que tenes con /ayuda`)
  }
}