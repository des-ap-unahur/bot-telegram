import BotResponses from '../Models/BotResponses.model';
import BotCommands from '../Models/BotCommands.model';
import BotResponseFiles from '../Models/BotResponseFiles.model';

class BotActionsController {
  public static post = async (req: any, res: any): Promise<BotCommands> => {
    const command = await BotCommands.create();
    return command;
  }
  
  public static get = async (req: any, res: any): Promise<void> => {
    const commands = await BotCommands.findAll();
    res.send(commands);
  }

  public static update = async (req:any, res:any): Promise<void>=>{
    const command = await BotCommands.findOne();
    command.update({});
    res.send();
  }

  public static delete = async (req:any, res:any): Promise<void> =>{
    const poll = await BotCommands.findOne();
    poll.destroy();
    res.send();
  }
  public static postResponses = async (req: any, res: any): Promise<BotResponses> => {
    const actionResponse = await BotResponses.create();
    return actionResponse;
    
  }

  public static updateResponse = async(req:any, res:any): Promise<void>=>{
    const actionResponse = await BotResponses.findOne();
    actionResponse.update({});
    res.send();
  }
}

export default BotActionsController;