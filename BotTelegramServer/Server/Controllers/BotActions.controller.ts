import BotResponses from '../Models/BotResponses.model';
import BotCommands from '../Models/BotCommands.model';
import BotResponseFiles from '../Models/BotResponseFiles.model';


class BotActionsController {

      post = async (req: any, res: any): Promise<BotCommands> => {
        const command = await BotCommands.create();
        return command;
      }
      get = async (req: any, res: any): Promise<void> => {
        const commands = await BotCommands.findAll();
        res.send(commands);
      }
    
      update = async(req:any, res:any): Promise<void>=>{
        const command = await BotCommands.findOne();
        command.update({});
        res.send();
      }
    
      delete = async (req:any, res:any): Promise<void> =>{
        const poll = await BotCommands.findOne();
        poll.destroy();
        res.send();
      }

      postResponses = async (req: any, res: any): Promise<BotResponses> => {
        const actionResponse = await BotResponses.create();
        return actionResponse;
        
      }
    
      updateResponse = async(req:any, res:any): Promise<void>=>{
        const actionResponse = await BotResponses.findOne();
        actionResponse.update({});
        res.send();
      }



}





export default BotActions;