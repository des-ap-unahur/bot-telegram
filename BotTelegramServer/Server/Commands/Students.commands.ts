import Markup from 'telegraf/markup';
import { Extra } from 'telegraf';

export const studentsCommands = [
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