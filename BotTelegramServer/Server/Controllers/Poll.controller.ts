import Poll from "../Models/Poll.model";
import PollQuestion from "../Models/PollQuestion.model";
class PollController {
  post = async (req: any, res: any): Promise<Poll> => {
    console.log(req.body);
    const poll = await Poll.create({
      user_type_id: req.body.user_type_id,
      name: req.body.name,
      description: req.body.description,
    });
    return poll;
  };

  getQuestions = async (req: any, res: any): Promise<void> => {
    
    try {
      const poll = await Poll.findAll();

      console.log(poll);
      res.send(poll);
    } catch (e) {
      console.log(e);
    }
  };
}
export default new PollController();
