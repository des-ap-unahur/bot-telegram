import Telegraf from "telegraf";
import { TelegrafContext } from "telegraf/typings/context";
import { typeCommands } from "../Commands/TypeCommands.commands";
import BotCommandRepository from "../../Entities/Repositories/BotCommand.repository";
import BotCommand from "../../Entities/Models/BotCommands.model";
import { invalidMessageCommand } from "../Commands/Message.command";
import { removeSensitiveCase } from "../Utils/RemoveSensitiveCase.utils";
import { buildContactCommand } from "../Utils/BuildContactCommand.utils";
import { assambleCommands } from "../Utils/AssambleCommands.utils";
import { callMail } from "../Utils/CallMail.utils";
import CommandInterface from "../Interfaces/Command.interface";
import bot from "../../Entities/Services/Bot.service";
import botPollController from "./BotPollController.controller";
import BotCommands from "../../Entities/Models/BotCommands.model";


class BotController {
  private commands: CommandInterface[];
  private contactCommand: (ctx: TelegrafContext) => void;
  private botCommands: BotCommand[];
  private commandsWithoutContact: BotCommands[];
  private bot: Telegraf<TelegrafContext>;
  private callMailCommand: CommandInterface | null;
  private callMailHear: CommandInterface | null;
  private callPollCommand: CommandInterface | null;

  constructor(bot) {
    this.bot = bot;
    this.botCommands = [];
    this.commands = [];
    this.callMailCommand = null;
    this.callMailHear = null;
    this.callPollCommand = null;
  }

  fetchCommands = async () => {
    this.botCommands = await BotCommandRepository.getCommandsTypes();
    this.commandsWithoutContact = this.botCommands.filter(
      (command) => command.commandsTypes.type !== "Contact"
    );
  };

  buildCommands = () => {
    this.commands = assambleCommands(this.commandsWithoutContact, typeCommands);
    this.contactCommand = buildContactCommand(this.botCommands);
  };

  execCommand = (text: string, ctx: TelegrafContext) => {
    this.commands.map(
      (command) =>
        removeSensitiveCase(command.command) === removeSensitiveCase(text) &&
        command.response(ctx)
    );
  };

  execHear = (text: string, ctx: TelegrafContext) => {
    this.commands.map(
      (command) =>
        removeSensitiveCase(command.message) === removeSensitiveCase(text) &&
        command.response(ctx)
    );
  };

  notUnderstandMessage = (text: string, ctx: TelegrafContext) => {
    !this.commands.some(
      (command) =>
        removeSensitiveCase(command.command) === removeSensitiveCase(text) ||
        removeSensitiveCase(command.message) === removeSensitiveCase(text) ||
        Boolean(this.callMailCommand) ||
        Boolean(this.callMailHear)
    ) && invalidMessageCommand(ctx);
  };

  execCallMailCommand = (text: string, ctx: TelegrafContext) => {
    this.callMailCommand = callMail(
      this.callMailCommand,
      text,
      this.commands,
      ctx,
      true
    );
  };

  execCallMailHear = (text: string, ctx: TelegrafContext) => {
    this.callMailHear = callMail(this.callMailHear, text, this.commands, ctx);
  };

  setCallPoll = (command: CommandInterface | null) => {
    this.callPollCommand = command;
  }

  execCallPoll = async (text: string, ctx: TelegrafContext) => {
    await botPollController.setCallback(this.setCallPoll);
    await botPollController.callPoll(text,ctx,this.commands, this.callPollCommand);
  }

  runCommands = () => {
    this.bot.on("contact", this.contactCommand);

    this.bot.on("message",(ctx: TelegrafContext) => {
      const { text } = ctx.message;

      if (text && this.commands.length && !this.callPollCommand) {
        this.execCommand(text, ctx);

        this.execHear(text, ctx);

        this.notUnderstandMessage(text, ctx);

        this.execCallMailCommand(text, ctx);

        this.execCallMailHear(text, ctx);
        
        this.execCallPoll(text,ctx);
      } else {
        this.execCallPoll(text,ctx);
      }
    });

    this.bot.launch();
  };

  refreshCommands = async () => {
    await this.fetchCommands();
    await this.buildCommands();
  };
}

export const botController = new BotController(bot);
