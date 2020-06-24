import Poll from '../Models/Poll.model';

class PollController {
  post = async (req: any, res: any): Promise<Poll> => {
    const poll = await Poll.create(
      /* { username: req.body.username, email: req.body.email, password: req.body.password },
      { fields: ['username', 'email', 'password'] }, */
    );
    return poll;
  }
  get = async (req: any, res: any): Promise<void> => {
    const polls = await Poll.findAll();
    res.send();
  }

  put = async(req:any, res:any): Promise<void>=>{
    const poll = await Poll.findOne();
    poll.update({});
    res.send();
  }

  delete = async (req:any, res:any): Promise<void> =>{
    const poll = await Poll.findOne();
    poll.destroy();
    res.send();
  }
}

export default new PollController();