import Poll from '../Models/Poll.model';

class PollController {
  post = async (req: any, res: any): Promise<Poll> => {
    const poll = await Poll.create();
    return poll;
  }
  
  get = async (req: any, res: any): Promise<void> => {
    const polls = await Poll.findAll();
    res.send();
  }

  update = async(req:any, res:any): Promise<void>=>{
    const poll = await Poll.findOne();
    poll.update({});
    res.send();
  }

  delete = async (req:any, res:any): Promise<void> =>{
    const poll = await Poll.findOne();
    poll.destroy();
    res.send();
  }

  getResponses = async (req:any, res:any): Promise<void> =>{
    const pollsResponses = await Poll.findAll();
    res.send(pollsResponses);
  }

  postResponses = async (req:any, res:any): Promise<void> =>{
    const pollResponses = await Poll.create();
    res.send();
  }

}


export default new PollController();