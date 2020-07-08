import Telegraf from "telegraf";
import botConfig from "../Config/Bot/Bot.config";

const bot = new Telegraf(botConfig.botToken);

export default bot;