import { TelegrafContext } from "telegraf/typings/context";

interface CommandInterface{
  message: string;
  command: string;
  response: (ctx:TelegrafContext) => void;
}

export default CommandInterface;