import Markup from 'telegraf/markup';
import Telegraf, { Extra } from 'telegraf';

export const botHears1 = [
  {message: "Hola",
  response: (ctx:any) => 
    {
      ctx.reply(`Hola ${ctx.from.first_name} ${ctx.from.last_name}`);
      console.log(ctx.from);
    }
  }]

export const botHears = [
  {message: "Hola",
  response: (ctx:any) => 
    {
      ctx.reply(`Hola ${ctx.from.first_name} ${ctx.from.last_name}`);
      console.log(ctx.from);
    }
  },
  {
    message: '📢 Plan de estudios', 
    response: (ctx:any) => {
      ctx.replyWithDocument(
        "http://www.unahur.edu.ar/sites/default/files/2017-10/Tecnicatura%20Universitaria%20en%20Inform%C3%A1tica.pdf"
      );
    }
  },
   {
    message: '📢 Ubicacion de la UNAHUR', 
    response: (ctx:any) => {
      ctx.replyWithLocation(
        "-34.618246","-58.637199" 
      );
    }
  },
  {
    message: '📢 Oferta Academica', 
    response: (ctx:any) => {
      ctx.reply(
        "http://www.unahur.edu.ar/es/oferta-academica" 
      );
    }
  },  {
    message:  '📢 registrarme', 
    response: (ctx:any) => {
       ctx.reply('Por favor, enviame tu numero para configurar tu usuario', Extra.markup((markup) => {
        return markup.resize()
        .keyboard([
        markup.contactRequestButton('Enviar mi numero')
        ]).oneTime()
        }))
        } 
    
  }

];

 

export const botOn =[
{ on: 'Enviar mi numero', 
  response: (ctx:any) => {
    console.log(ctx.update.message.contact)
    return ctx.reply(ctx.update.message.contact)
  }
}

]

 
export const botCommands1 = [
  {command: 'ayuda',
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

  export const botCommandInit=[
    {command: 'registrarme',
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
    }

  ]

export const botCommands = [
  {command: 'ayuda',
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
  {command: 'registrarme',
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

export const botCommandsAlum = [
  {command: 'ayuda',
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
  {command: 'registrarme',
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

