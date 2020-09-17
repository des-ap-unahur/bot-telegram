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
import botPollController from "./BotPollController.controller";
import BotCommands from "../../Entities/Models/BotCommands.model";
import BotUsers from "../../Entities/Models/BotUsers.model";
import BotUserRepository from "../../Entities/Repositories/BotUser.repository";


class BotController {
  private commands: CommandInterface[];
  private contactCommand: (ctx: TelegrafContext, callback: (ctx) => {}) => void;
  private botCommands: BotCommand[];
  private commandsWithoutContact: BotCommands[];
  private bot: Telegraf<TelegrafContext>;
  private callPollCommand: CommandInterface | null;
  private botUsers: BotUsers[];

  constructor(bot) {
    this.bot = bot;
    this.botCommands = [];
    this.commands = [];
    this.callPollCommand = null;
    this.botUsers = [];
  }

  fetchUser = async (ctx: TelegrafContext) => {
    const telegram_user_id: number = ctx.message.chat.id;
    const userLogued: boolean = this.botUsers.some(user => user.tel_user_id === telegram_user_id);
    const user: BotUsers | null = await BotUserRepository.getByTelegramIdWithGuaraniUser(telegram_user_id);

    if(!userLogued && user){
      const userAvailableCommands: BotCommand[] = await this.commandsWithoutContact.filter(
        command => command.user_type_id === user.user_type_id || command.user_type_id === 3
      );

      this.commands = await assambleCommands(userAvailableCommands, typeCommands);

      this.botUsers.push(user);
    }
  }

  fetchCommands = async (): Promise<void> => {
    this.botCommands = await BotCommandRepository.getCommandWithAllRelation();
    this.commandsWithoutContact = this.botCommands.filter(
      (command) => command.commandsTypes.type !== "Contact"
    );
  };

  buildCommands = (): void => {
    const basicCommands = this.commandsWithoutContact.filter(
      command => command.user_type_id === 3
    );

    this.commands = assambleCommands(basicCommands, typeCommands);
    this.contactCommand = buildContactCommand(this.botCommands);
  };
  
  execCommand = (text: string, ctx: TelegrafContext): void => {
    this.commands.map(
      (command) =>
        removeSensitiveCase(command.command) === removeSensitiveCase(text) &&
        command.response(ctx)
    );
  };

  execHear = (text: string, ctx: TelegrafContext): void => {
    this.commands.map(
      (command) =>
        removeSensitiveCase(command.message) === removeSensitiveCase(text) &&
        command.response(ctx)
    );
  };

  notUnderstandMessage = (text: string, ctx: TelegrafContext): void => {
    !this.commands.some(
      (command) =>
        removeSensitiveCase(command.command) === removeSensitiveCase(text) ||
        removeSensitiveCase(command.message) === removeSensitiveCase(text)
    ) && invalidMessageCommand(ctx);
  };

  setCallPoll = (command: CommandInterface | null): void => {
    this.callPollCommand = command;
  }

  execCallPoll = async (text: string, ctx: TelegrafContext): Promise<void> => {
    const user = this.botUsers.find(user => user.tel_user_id === ctx.message.chat.id);
    await botPollController.setCallback(this.setCallPoll);
    await botPollController.callPoll(text,ctx,this.commands, this.callPollCommand, user);
  }

  runCommands = ():void => {
    this.bot.on("contact", (ctx) => this.contactCommand(ctx, this.fetchUser));

    this.bot.on("message", (ctx: TelegrafContext) => {
      const { text } = ctx.message;

      if (text && this.commands.length && !this.callPollCommand) {
        this.fetchUser(ctx);

        this.execCommand(text, ctx);

        this.execHear(text, ctx);

        this.notUnderstandMessage(text, ctx);
        
        this.execCallPoll(text, ctx);
      } else {
        this.execCallPoll(text, ctx);
      }
    });

    this.bot.launch();
  };

  refreshCommands = async (): Promise<void> => {
    await this.fetchCommands();
    await this.buildCommands();
  };
}

export const botController = new BotController(bot);
