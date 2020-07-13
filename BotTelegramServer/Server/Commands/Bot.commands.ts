import { Extra } from 'telegraf';

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

