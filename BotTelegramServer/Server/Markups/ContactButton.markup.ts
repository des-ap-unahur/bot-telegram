import { Extra } from 'telegraf';

const ContactButton = (parameter) => Extra
  .markdown()
  .markup(
    (markup) =>
      markup.keyboard([
        [markup.contactRequestButton(parameter)]
      ])
      .oneTime()
      .resize()
  )

export default ContactButton;