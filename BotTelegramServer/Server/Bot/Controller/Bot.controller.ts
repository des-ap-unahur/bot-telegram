import Telegraf from "telegraf";
import { TelegrafContext } from "telegraf/typings/context";
import { typeCommands } from "../Commands/TypeCommands.commands";
import BotCommandRepository from "../../Entities/Repositories/BotCommand.repository";
import BotCommand from "../../Entities/Models/BotCommands.model";
import { invalidMessageCommand } from "../Commands/Message.command";
import { removeSensitiveCase } from "../Utils/RemoveSensitiveCase.utils";
import { buildContactCommand } from "../Utils/BuildContactCommand.utils";
import { assambleCommands } from "../Utils/AssambleCommands.utils";
import CommandInterface from "../Interfaces/Command.interface";
import bot from "../../Entities/Services/Bot.service";
import BotPollController from "./BotPollController.controller";
import BotCommands from "../../Entities/Models/BotCommands.model";
import BotUsers from "../../Entities/Models/BotUsers.model";
import BotUserRepository from "../../Entities/Repositories/BotUser.repository";
import { capitalize } from "../Utils/Capitalize.utils";
import { switchCommands } from "../Utils/SwitchCommands.utils";
import { pollCommandText, userTypes, withOutDescription } from "../Constants/Bot.constans";
import { PollPendingForUser } from "../Interfaces/PollPendingForUser.interface";


class BotController {
  private comunityCommands: CommandInterface[];
  private studentCommands: CommandInterface[];
  private teacherCommands: CommandInterface[];
  private contactCommand: (ctx: TelegrafContext, callback: (ctx) => void) => void;
  private botCommands: BotCommand[];
  private commandsWithoutContact: BotCommands[];
  private bot: Telegraf<TelegrafContext>;
  private botUsers: BotUsers[];
  private pollPending: PollPendingForUser[];
  private refresh: boolean;
  private commandsToExec: any;

  constructor(bot) {
    this.bot = bot;
    this.botCommands = [];
    this.commandsToExec = {}
    this.comunityCommands = [];
    this.studentCommands = [];
    this.teacherCommands = [];
    this.botUsers = [];
    this.pollPending = [];
    this.refresh = false
  }

  fetchUser = async (ctx: TelegrafContext) => {
    const telegram_user_id: number = ctx.message.chat.id || ctx.chat.id;
    const userLogued: boolean = this.botUsers.some(
      (user) => user.tel_user_id === telegram_user_id
    );
    
    const user: BotUsers | null = await BotUserRepository.getByTelegramIdWithGuaraniUser(
      telegram_user_id
    );

    if ((!userLogued && user) || this.refresh) {
      await this.setMyCommands(user.user_type_id)
      this.botUsers.push(user);
      return
    } else if (userLogued && user) {
      await this.setMyCommands(user.user_type_id)
      return
    }
    await this.setMyCommands()
    return
  };

  fetchCommands = async (): Promise<void> => {
    this.botCommands = await BotCommandRepository.getCommandWithAllRelation();
    this.commandsWithoutContact = this.botCommands.filter(
      (command) => command.commandsTypes.type !== "Contact"
    );
  };

  buildCommands = (): void => {
    const comunityCommands = this.commandsWithoutContact.filter(
      command => command.user_type_id === userTypes.comunity
    );

    const studentCommands: BotCommand[] = this.commandsWithoutContact.filter(
      command =>
        command.user_type_id === userTypes.student ||
        command.user_type_id === userTypes.comunity
    );

    const teacherCommands: BotCommand[] = this.commandsWithoutContact.filter(
      command =>
        command.user_type_id === userTypes.teacher ||
        command.user_type_id === userTypes.comunity
    );

    this.comunityCommands = assambleCommands(comunityCommands, typeCommands);
    this.studentCommands = assambleCommands(studentCommands, typeCommands);
    this.teacherCommands = assambleCommands(teacherCommands, typeCommands);
    this.commandsToExec = {
      comunityCommands: this.comunityCommands,
      studentCommands: this.studentCommands,
      teacherCommands: this.teacherCommands
    }
    this.botCommands = []
    this.contactCommand = buildContactCommand(this.botCommands);
  };

  execCommand = (text: string, ctx: TelegrafContext, commands:CommandInterface[]): void => {
    commands.map(
      (command) =>
        removeSensitiveCase(command.command) === removeSensitiveCase(text) &&
        command.response(ctx)
    );
  };

  execHear = (text: string, ctx: TelegrafContext, commands:CommandInterface[]): void => {
    commands.map(
      (command) =>
        removeSensitiveCase(command.message) === removeSensitiveCase(text) &&
        command.response(ctx)
    );
  };

  notUnderstandMessage = (text: string, ctx: TelegrafContext, commands:CommandInterface[]): void => {
    !commands.some(
      (command) =>
        removeSensitiveCase(command.command) === removeSensitiveCase(text) ||
        removeSensitiveCase(command.message) === removeSensitiveCase(text)
    ) && invalidMessageCommand(ctx);
  };

  removeUserFromPoll = (id: number) => {
    const pollListUpdated = this.pollPending.filter(poll => poll.user_id !== id);
    this.pollPending = pollListUpdated;
  };

  execCallPoll = async (ctx: TelegrafContext, text: string, user: BotUsers | null): Promise<void> => {
    const pollToResponse = this.pollPending.find(poll => user && poll.user_id === user.tel_user_id);
    const textEqualsPollText = removeSensitiveCase(pollCommandText).includes(removeSensitiveCase(text));

    if(pollToResponse && user){
      await pollToResponse.poll.callPoll(
        text,
        ctx
      );
    } else if (!pollToResponse && user && textEqualsPollText){
      const poll = new BotPollController(user, this.removeUserFromPoll);
      const user_id = user.tel_user_id;
      const pollToResponse: PollPendingForUser = { poll, user_id }

      await poll.callPoll(
        text,
        ctx
      );

      this.pollPending = [pollToResponse, ...this.pollPending];
    }
  };

  setMyCommands = async (type?:number) => {
    const commandFiltered: BotCommand[] = await type ? 
      this.commandsWithoutContact.filter(
        command =>
          (command.user_type_id === type ||
          command.user_type_id === userTypes.comunity) &&
          command.tel_command.length <= 31
      )
    :
      this.commandsWithoutContact.filter(
        command => command.user_type_id === userTypes.comunity
      )
    
    const commands = await commandFiltered.map(
      command => {
        const validDescription = command.botResponses && command.botResponses.description.length <= 31;
        const commandDescription = validDescription ? command.botResponses.description : withOutDescription

        return {command: command.tel_command.toLowerCase(), description: capitalize(String(commandDescription))}
      }
    )
    await this.bot.telegram.setMyCommands(commands).catch();
  }

  runCommands = async (): Promise<void> => {
    this.bot.use(async(ctx:TelegrafContext, next:any) => {
      await this.fetchUser(ctx);
      next()
    })

    this.bot.on("contact", (ctx) => this.contactCommand(ctx, this.fetchUser));

    this.bot.on("message", 
      (ctx) => switchCommands(ctx, this.commandsToExec, this.botUsers, (commands, user) => {
        const { text } = ctx.message;

        const userInPoll = this.pollPending.some(
          poll => user && user.tel_user_id === poll.user_id
        )
        
        if (text && commands.length && !userInPoll) {
          this.execCommand(text, ctx, commands);

          this.execHear(text, ctx, commands);

          this.notUnderstandMessage(text, ctx, commands);

          this.execCallPoll(ctx, text, user).catch();
        } else {
          this.execCallPoll(ctx, text, user).catch();
        }
      })
    );

    this.bot.launch();
  };

  refreshCommands = async (): Promise<void> => {
    this.refresh = true;
    await this.fetchCommands();
    await this.buildCommands();
  };
}

export const botController = new BotController(bot);
