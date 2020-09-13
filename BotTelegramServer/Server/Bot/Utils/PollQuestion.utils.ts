import PollRepository from "../../Entities/Repositories/Poll.repository";
import PollResponsesRepository from "../../Entities/Repositories/PollResponses.repository";
import PollQuestionsRepository from "../../Entities/Repositories/PollQuestions.repository";
import Poll from "../../Entities/Models/Poll.model";
import PollRolesAccess from "../../Entities/Models/PollRolesAccess.model";
import PollQuestions from "../../Entities/Models/PollQuestions.model";
import { NestedCommandsButtonType } from "../Commands/NestedCommandsButtonType.command";

class PollQuestion {
  private questions: Array<any>;
  private pollIsSelected: Boolean;
  private poll: Poll;
  private polls;
  private responses: Array<any>;
  private currentQuestionId: Number;

  constructor() {
    this.questions = [];
    this.pollIsSelected = false;
    this.poll = null;
    this.polls = [];
    this.responses = [];
    this.currentQuestionId = 0;
  }

  emptyQuestions = (): void => {
    this.questions = [];
    this.pollIsSelected = false;
    this.poll = null;
    this.polls = [];
    this.responses = [];
    this.currentQuestionId = null;
  };

  getPolls = async (): Promise<void> => {
    try {
      const polls = await PollRepository.getAll();
      this.polls = polls;
    } catch (e) {
      console.log(e);
    }
  };

  setUserResponse = (response: any): void => {
    this.responses.push(response);
  };

  endPoll = async (text: any, ctx: any): Promise<any> => {
    this.setUserResponse({
      id_response: this.currentQuestionId,
      response: text,
    });
    await this.postResponses(ctx);
    this.emptyQuestions();
    ctx.reply("Gracias por responder la encuesta");
    return null;
  };

  postResponses = async (ctx: any) => {
    try {
      await PollResponsesRepository.post(this.responses);
    } catch (e) {
      console.log(e);
    }
  };

  callPoll = (text: any, ctx: any, commands: any, pollCommand: any) => {
    if (!pollCommand) {
      const command = commands.find(
        (command) => command.command === "/Encuesta" && text === "/Encuesta"
      );
      if (command) {
        this.getPolls().then(() => {
          const pollList = this.polls
            .map((poll, index) => `${index + 1}. ${poll.name} \n`)
            .join("");
          ctx.reply("Las encuestas disponibles son: \n" + pollList);
        });
        return command;
      }
    }
    if (this.questions.length === 0 && this.pollIsSelected) {
      this.endPoll(text, ctx);
      return null;
    }
    if (this.polls) {
      !this.pollIsSelected
        ? this.selectPoll(text, ctx)
        : this.responsePoll(text, ctx);
    }
    return pollCommand;
  };

  getSurveyQuestions = async (ctx: any): Promise<void> => {
    await this.getQuestionsData();
    await ctx.reply(
      `Usted ha comenzado a responder la encuesta ${this.poll.name}. Para terminar la encuesta ejecuta el comando /salir o termina la encuesta \n`
    );
    const question = this.questions.pop();
    this.currentQuestionId = question.id;
    ctx.reply(question.question);
  };

  getQuestionsData = async (): Promise<void> => {
    const poll = await PollQuestionsRepository.get(this.poll.poll_id);
    this.questions = await poll.questions
      .map((pollQ) => {
        return { id: pollQ.poll_question_id, question: pollQ.question };
      })
      .reverse();
  };

  responsePoll = (text: any, ctx: any): void => {
    this.setUserResponse({
      response_id: this.currentQuestionId,
      response: text,
    });
    const question = this.questions.pop();
    this.currentQuestionId = question.id;
    ctx.reply(question.question);
  };

  selectPoll = async (text: any, ctx: any): Promise<void> => {
    if (
      !this.pollIsSelected &&
      text > 0 &&
      this.polls.some((poll, index) => index === Number(text))
    ) {
      this.poll = this.polls[text - 1];
      await this.getSurveyQuestions(ctx);
      this.pollIsSelected = true;
    }
  };
}

export default new PollQuestion();
