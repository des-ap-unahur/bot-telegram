import Poll from "../Models/Poll.model";
import PollQuestion from "../Models/PollQuestions.model";
import PollQuestionInterface from "../../Interfaces/PollQuestion.interface";
import Paginate from "../../Utils/Paginate.utils";
import PollWithPagination from "../../Interfaces/PollWithPagination.interface";
import PollResponses from "../Models/PollResponses.model";

class PollRepository {
  getAllWithPagination = async (
    paginationData: any
    ): Promise<PollWithPagination> => {
      const { count, rows: poll } = await Poll.findAndCountAll({
        include: [PollQuestion],
        ...Paginate(paginationData),
      });
      
      const total = count;
      return { total, poll };
    };
    
    getAll = async (): Promise<Poll[]> => {
      const poll: Poll[] = await Poll.findAll({
        include: [PollQuestion],
        limit: 10,
      });
      return poll;
    };
    getAllquestions =async(pollId)=>{
      const result:PollQuestion[]=await PollQuestion.findAll({where:{poll_id: pollId}});
      return result;
    }
    get = async (id: number): Promise<Poll> => {
    const pollsQuestions: Poll = await Poll.findByPk(id, {
      include: [PollQuestion],
    });
    return pollsQuestions;
  };
  getQuestionsByPollId = async (id: number): Promise<any> => {
    const pollsQuestions: PollQuestion[] = await PollQuestion.findAll({
      where: { poll_id: id },
    });
    return pollsQuestions;
  };
  post = async (data: PollQuestionInterface[]): Promise<PollQuestion[]> => {
    const pollQuestions = await PollQuestion.bulkCreate(data);
    return pollQuestions;
  };

  postQuestionByPollId= async (data: any[],id:number): Promise<any[]> => {
    const _id = Number(id);

    if(data.length>0){
      const questions = data.map((e)=> {return {...e,...{poll_id:_id}}});
      const result = await PollQuestion.bulkCreate(questions);
      return result;
    } else {
      return [];
    }
  };

  update = async (
    data: PollQuestionInterface[]
  ): Promise<PollQuestion[]> => {
    if (data.length > 0) {
      const questions = data.map((e) =>
        PollQuestion.findByPk(e.poll_question_id)
      );
      const questionsUpdate = await Promise.all(questions);
      const questionsUpdated = await questionsUpdate.map((question) => {
        const _question = data.find(
          (e) => e.poll_question_id === question.poll_question_id
        );
        return question.update(_question, {
          where: { poll_id: _question.poll_id },
        });
      });
      const result = await Promise.all(questionsUpdated);
      return result;
    } else {
      return [];
    }
  };
  
  delete = async (id: number): Promise<void> => {
    const pollQuestions: PollQuestion = await PollQuestion.findByPk(id);
    pollQuestions.destroy();
  };

  deleteQuestions = async (questions:PollQuestion[]): Promise<void> => {
    try{
    if(questions.length){
 
      const questionsData = await questions.map(e=>PollQuestion.findByPk(e.poll_question_id));
      const questionsResult = await  Promise.all(questionsData);
      
      if(questionsResult.length){

        await questionsResult.forEach(e=> PollResponses.destroy({where:{response_id:e.poll_question_id}}));
        await questionsResult.forEach(e=>e.destroy());

      }

    }
    }catch(e){
      console.log(e)
    }
   
  };


}

export default new PollRepository();
