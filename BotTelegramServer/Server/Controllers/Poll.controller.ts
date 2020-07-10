import PollRepository from "../Repositories/Poll.repository";


class PollController {

  getPolls = async (req: any, res: any): Promise<void> => {
    try {
      const polls = await PollRepository.getPolls();
      res.send(polls);
    } catch (e) {
      console.log(e);
    }
  };

  getPollById = async (req: any, res: any): Promise<void>=>{
    try{
      const poll = await PollRepository.getPoll(req.params.id);
      res.send(poll);
    }catch(e){
      console.log(e);
    }
  }

  getPollsQuestions = async (req: any, res: any): Promise<void>=>{
    try{
      const poll = await PollRepository.getPollsQuestions();
      res.send(poll);
    }catch(e){
      console.log(e);
    }
  }

  getPollQuestionsById = async (req: any, res: any): Promise<void>=>{
    try{
      const pollQuestions = await PollRepository.getPollQuestionsById(req.params.id);
      res.send(pollQuestions);
    }catch(e){
      console.log(e);
    }
  }
}
export default new PollController();
