import PollRepository from "../Repositories/Poll.repository";
import Poll from "../Models/Poll.model";


class PollController {
  getPolls = async (req: any, res: any): Promise<void> => {
    try {
      const polls = await PollRepository.getAll();
      res.send(polls);
    } catch (e) {
      console.log(e);
    }
  };

  getPollById = async (req: any, res: any): Promise<void>=>{
    try{
      const poll = await PollRepository.get(req.params.id);
      res.send(poll);
    }catch(e){
      console.log(e);
    }
  }

  postPoll = async (req:any, res:any): Promise<void>=>{
    const poll = await PollRepository.post(req.body)
    res.send("ok")
  }
}
export default new PollController();
