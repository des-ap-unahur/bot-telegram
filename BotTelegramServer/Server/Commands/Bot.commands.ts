import Markup from 'telegraf/markup';

export const botHears = [
  {message: "Hola",
  response: (ctx:any) => 
    {
      ctx.reply(`Hola ${ctx.from.first_name} ${ctx.from.last_name}`);
      console.log(ctx.from);
    }
  },
  {
    message: "Plan de estudio",
    response: (ctx:any) => {
      ctx.replyWithDocument(
        "http://www.unahur.edu.ar/sites/default/files/2017-10/Tecnicatura%20Universitaria%20en%20Inform%C3%A1tica.pdf"
      );
    }
  },
  {
    message: "Ubicacion", 
    response: (ctx:any) => {
      ctx.replyWithLocation(
        "-34.618246","-58.637199"
      );
    }
  }
];

export const botCommands = [
  {command: 'ayuda',
  response: (ctx:any) => 
    { 
      return ctx.reply("¿Qué necesitas?", 
        Markup.keyboard([
          ['🔍 Search', '😎 Popular'], 
          ['☸ Setting', '📞 Feedback'], 
          ['📢 Ads', '⭐️ Rate us', '👥 Share']
        ])
        .oneTime()
        .resize()
        .extra()
      ).then(res=>console.log(res))
    }
  }
]