import { Extra } from 'telegraf';

const Keyboard = (param) => Extra
  .markdown()
  .markup(
    (markup) =>
      markup.keyboard([
        [...param]
      ])
      .oneTime()
      .resize()
  )

export default Keyboard;