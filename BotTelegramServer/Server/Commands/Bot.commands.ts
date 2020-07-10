import Markup from 'telegraf/markup';
import { Extra } from 'telegraf';
import { people } from './people';

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

export const botHears = [
  { message: "Hola",
    response: (ctx:any) => 
    {
      ctx.reply(`Hola ${ctx.from.first_name} ${ctx.from.last_name}`);
      console.log(ctx.from);
    }
  },
  {
    message: '📢 Plan de estudios', 
    response: (ctx:any) => 
    {
      ctx.replyWithDocument(
        "http://www.unahur.edu.ar/sites/default/files/2017-10/Tecnicatura%20Universitaria%20en%20Inform%C3%A1tica.pdf"
      );
    }
  },
   {
    message: '📢 Ubicacion de la UNAHUR', 
    response: (ctx:any) => 
    {
      ctx.replyWithLocation(
        "-34.618246","-58.637199" 
      );
    }
  },
  {
    message: '📢 Oferta Academica', 
    response: (ctx:any) => 
    {
      ctx.reply(
        "http://www.unahur.edu.ar/es/oferta-academica" 
      );
    }
  },  
  {
    message:  '📢 registrarme', 
    response: (ctx:any) => 
    {
      ctx.reply('Por favor, enviame tu numero para configurar tu usuario', Extra.markup((markup) => {
        return markup.resize()
          .keyboard([
          markup.contactRequestButton('Enviar mi numero')
        ]).oneTime()
      }))
    }  
  }
];
 
export const publicCommands = [
  {
    command: 'ayuda',
    response: (ctx:any) => 
    { 
      console.log('SEND HELP')
      return ctx.reply("¿Qué necesitas? nene", 
        Markup.keyboard([
          ['📢 Cosas de publico general'], 
          ['📢 registrarme']
        ])
        .oneTime()
        .resize()
        .extra()
      ).then(res=>console.log(res))
    }
  }]

  export const baseBotCommands=[
    {
      command: 'registrarme',
      response: (ctx:any) => 
      { 
        console.log('SEND NUM')
        return ctx.reply('Por favor, enviame tu numero para configurar tu usuario', Extra.markup((markup) => {
          return markup.resize()
            .keyboard(
              [markup.contactRequestButton('Enviar mi numero')]
            )
            .oneTime()
          })
        )
      }
    } 
  ]

export const botCommandsForTeachers = [
  {
    command: 'ayuda',
    response: (ctx:any) => 
      { 
        console.log('SEND HELP')
        return ctx.reply("¿Qué necesitas? nene", 
          Markup.keyboard([
            ['📢 Oferta Academica'], 
            ['📢 Ubicacion de la UNAHUR'], 
            ['📢 Plan de estudios'],
            ['📢 Encuestas locas']
          ])
          .oneTime()
          .resize()
          .extra()
        ).then(res=>console.log(res))
      }
  },
  {
    command: 'registrarme',
    response: (ctx:any) => 
    { 
      console.log('SEND NUM')
      return ctx.reply('Por favor, enviame tu numero para configurar tu usuario', 
        Extra.markup((markup) => {
          return markup.resize()
            .keyboard(
              [markup.contactRequestButton('Enviar mi numero')]
            )
            .oneTime()
          })
        )
    }
  },
  {
    command: 'plandeestudio',
    response: (ctx:any) => 
    {
      return ctx.replyWithDocument(
        "http://www.unahur.edu.ar/sites/default/files/2017-10/Tecnicatura%20Universitaria%20en%20Inform%C3%A1tica.pdf"
      );
    }
  },
  {
    command: "ubicacionUNAHUR",
    response: (ctx:any) => {
     return ctx.replyWithLocation( 
      "-34.618246","-58.637199" 
      );
    }
  }
]

export const botCommandsForStudents = [
  {
    command: 'ayuda',
    response: (ctx:any) => 
    { 
      console.log('SEND HELP')
      return ctx.reply("¿Qué necesitas? nene", 
        Markup.keyboard([
          ['📢 Oferta Academica'], 
          ['📢 Ubicacion de la UNAHUR'], 
          ['📢 Plan de estudios'],
          ['📢 Cosas de alumnos']
        ])
        .oneTime()
        .resize()
        .extra()
      ).then(res=>console.log(res))
    }
  },
  {
    command: 'registrarme',
    response: (ctx:any) => 
    { 
      console.log('SEND NUM')
      return ctx.reply('Por favor, enviame tu numero para configurar tu usuario', Extra.markup((markup) => {
        return markup.resize()
        .keyboard([
        markup.contactRequestButton('Enviar mi numero')
        ]).oneTime()
        }))
        }
    },
    {
    command: 'plandeestudio',
    response: (ctx:any) => {
     return ctx.replyWithDocument(
      "http://www.unahur.edu.ar/sites/default/files/2017-10/Tecnicatura%20Universitaria%20en%20Inform%C3%A1tica.pdf"
      );
    }
  },
  {
    command: "ubicacionUNAHUR",
    response: (ctx:any) => {
     return ctx.replyWithLocation( 
      "-34.618246","-58.637199" 
      );
    }
  }
]

export const botOnCommand = [
  {
    command: 'contact',
    response: (ctx:any, bot: any) => {
      const phoneNumber = ctx.update.message.contact.phone_number
      const verifiedProfile = people.find(profile => profile.phone === phoneNumber.substr(-10))
      console.log(ctx.update.message.contact.phone_number);
      console.log(ctx.update.message.contact);
    
      if(Boolean(verifiedProfile)){
        if(verifiedProfile.isTeacher){
          botCommandsForTeachers.map(command => bot.command(command.command, command.response));
     
        }else{
          botCommandsForStudents.map(command => bot.command(command.command, command.response));
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
  }
]

