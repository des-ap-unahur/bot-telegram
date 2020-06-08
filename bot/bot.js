const Telegraf = require("telegraf");
const Markup = require('telegraf/markup')
const bot = new Telegraf("1094118317:AAHTofUb1BRE6Pq4npCJ_DSLLkKJgqA6z34");

bot.start((ctx) => {});
bot.hears("Hola", (ctx) => {
  ctx.reply(`Hola ${ctx.from.first_name} ${ctx.from.last_name}`);
  console.log(ctx.from);
});

bot.hears("Plan de estudio", (ctx) => {
  ctx.replyWithDocument(
    "http://www.unahur.edu.ar/sites/default/files/2017-10/Tecnicatura%20Universitaria%20en%20Inform%C3%A1tica.pdf"
  );
});

bot.hears("Ubicacion", (ctx) => {
  ctx.replyWithLocation(
    "-34.618246","-58.637199"
  );
});
bot.command('ayuda', ({ reply }) => {
    return reply("¿Qué necesitas?",Markup
      .keyboard([
        ['🔍 Search', '😎 Popular'], // Row1 with 2 buttons
        ['☸ Setting', '📞 Feedback'], // Row2 with 2 buttons
        ['📢 Ads', '⭐️ Rate us', '👥 Share'] // Row3 with 3 buttons
      ])
      .oneTime()
      .resize()
      .extra()
    ).then(res=>console.log(res))
  });


bot.launch();