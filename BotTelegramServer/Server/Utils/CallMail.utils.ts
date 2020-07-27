import { removeSensitiveCase } from "./RemoveSensitiveCase.utils"

export const callMail = (callMail:any, text: string, commands: any[], ctx: any) => {
  const sendMail = (mailCommand, text, ctx) => {
    mailCommand && text.includes('@') && mailCommand.response(ctx, Boolean(text))
  }

  if(text.includes('@')){
    sendMail(callMail, text, ctx)
    return null
  } else {
    return commands.find(command => removeSensitiveCase(text).includes('mail') && removeSensitiveCase(text) === removeSensitiveCase(command.command))
  }
}