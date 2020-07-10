import Markup from 'telegraf/markup';

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
  }
]