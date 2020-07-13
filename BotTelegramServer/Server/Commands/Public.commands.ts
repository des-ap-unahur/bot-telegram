import { Extra } from 'telegraf';

export const publicCommands = [
  {
    command: 'ayuda',
    response: (ctx:any) => 
    { 
      console.log('SEND HELP')
      return ctx.reply("¿Qué necesitas? nene", Extra.markup((markup)=>
          markup.keyboard([
            ['📢 Cosas de publico general'], 
            ['📢 registrarme']
          ])
          .oneTime()
          .resize()
          .extra()
        )
      ).then(res=>console.log(res))
    }
  }
]