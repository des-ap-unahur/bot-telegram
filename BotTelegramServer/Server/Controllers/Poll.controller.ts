import Poll from '../Models/Poll.model';

class PollController {
  

  get = async (req: any, res: any): Promise<void> => {
    const Polls = await Poll.findAll();
    res.send(Polls);
  }
}

export default new PollController();