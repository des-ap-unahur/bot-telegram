import Poll from "../Models/Poll.model";
import PollInterface from "../../Interfaces/Poll.interface";
import PollQuestions from "../Models/PollQuestions.model";
import paginate from "../../Utils/Paginate.utils";
import PollWithPagination from "../../Interfaces/PollWithPagination.interface";
import UserTypes from "../Models/UserTypes.model";
import PollResponses from "../Models/PollResponses.model";
import PollQuestionsRepository from "./PollQuestions.repository";
import PollRolesAccess from "../Models/PollRolesAccess.model";

class PollRepository {
  getAllWithPagination = async (
    paginationData: any
  ): Promise<PollWithPagination> => {
    const total: number = await Poll.count();
    const poll: Poll[] = await Poll.findAll({
      include: [UserTypes, PollQuestions],
      ...paginate(paginationData),
    });
    return { total, poll };
  };

  getAll = async (): Promise<Poll[]> => {
    const polls: Poll[] = await Poll.findAll();
    return polls;
  };

  get = async (id: number): Promise<Poll> => {
    const poll: Poll = await Poll.findByPk(id);
    return poll;
  };

  post = async (data: PollInterface): Promise<Poll> => {
    const poll: Poll = await Poll.create(data);
    return poll;
  };

  update = async (id: number, data: PollInterface): Promise<Poll> => {
    const poll: Poll = await Poll.findByPk(id);
    poll.update(data);
    return poll;
  };

  delete = async (id: number): Promise<any> => {
    try {
      const questions = await PollQuestionsRepository.getQuestionsByPollId(id);
      if (questions) {
        const questionsIds = await questions.map(
          (question) => question.poll_question_id
        );
        await PollResponses.destroy({
          where: { response_id: questionsIds },
        });
        await PollQuestions.destroy({ where: { poll_id: id } });
        await PollRolesAccess.destroy({ where: { poll_id: id } });
        await Poll.destroy({ where: { poll_id: id } });
      }
      return { message: "ok" };
    } catch (e) {
      console.log(e);
    }
  };
}
export default new PollRepository();
