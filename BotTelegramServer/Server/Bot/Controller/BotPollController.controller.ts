import PollRepository from "../../Entities/Repositories/Poll.repository";
import PollResponsesRepository from "../../Entities/Repositories/PollResponses.repository";
import PollQuestionsRepository from "../../Entities/Repositories/PollQuestions.repository";
import Poll from "../../Entities/Models/Poll.model";
import { TelegrafContext } from "telegraf/typings/context";
import CommandInterface from "../Interfaces/Command.interface";
import PollResponses from "../../Entities/Models/PollResponses.model";
import { pollCommandText, exitCommand } from "../Constants/Bot.constans"
import { botWording } from "../Constants/Wording/Bot.wording";
import { removeSensitiveCase } from "../Utils/RemoveSensitiveCase.utils";
import PollQuestion from "../../Entities/Models/PollQuestions.model";
import BotUsers from "../../Entities/Models/BotUsers.model";


class BotPollController {
  private questions: PollQuestion[];
  private poll: Poll | null;
  private polls: Poll[];
  private responses: PollResponses[];
  private currentQuestionId: number;
  private pollCallback: (command: CommandInterface | null) => void;
  private botUser: BotUsers | null; 

  constructor() {
    this.questions = [];
    this.poll = null;
    this.polls = [];
    this.responses = [];
    this.currentQuestionId = 0;
    this.botUser = null;
  }

  setCallback = (callback): void => {
    this.pollCallback = callback;
  }

  getPolls = async (): Promise<void> => {
    const polls: Poll[] = await PollRepository.getAll();
    this.polls = polls ? polls : [];
  };

  showAvailablePolls = (ctx: TelegrafContext): void => {
    const { theAvailableSurveysAre } = botWording;
    const availablePolls: Poll[] = this.polls.filter(poll => poll.user_type_id === this.botUser.user_type_id);
    const pollList: string = availablePolls.map(
      (poll, index) => `${index + 1}. ${poll.name} \n`
    ).join("");

    ctx.reply(theAvailableSurveysAre + "\n" + pollList);
  }

  responseQuestion = (ctx: TelegrafContext): void => {
    const pollQuestion: PollQuestion = this.questions.shift();

    if(pollQuestion){
      const { poll_question_id, question } = pollQuestion;
      this.currentQuestionId = poll_question_id;
      ctx.reply(question);
    } else {
      this.polls = [];
    }
  }

  getPollQuestions = async (ctx: TelegrafContext): Promise<void> => {
    const { youHaveStartedToAnswerTheSurvey, toEndTheSurveyRunTheSlashExitCommandOrEndTheSurvey } = botWording;

    await this.getQuestionsData();
    await ctx.reply(
      youHaveStartedToAnswerTheSurvey + this.poll.name + ". " + toEndTheSurveyRunTheSlashExitCommandOrEndTheSurvey + "\n"
    );

    await this.responseQuestion(ctx);
  };

  getQuestionsData = async (): Promise<void> => {
    const { questions } = await PollQuestionsRepository.get(this.poll.poll_id);

    this.questions = questions;
  };

  setUserResponse = (response: any): void => {
    this.responses.push(response);
  };

  selectPoll = async (text: string, ctx: TelegrafContext): Promise<void> => {
    const index:number = Number(text);
    const pollToSelect: Poll = this.polls[index - 1];

    if (!this.poll && index && pollToSelect) {
      this.poll = pollToSelect;
      await this.getPollQuestions(ctx);
    }
  };

  responsePoll = async (text: string, ctx: TelegrafContext): Promise<void> => {
    const id = this.botUser && this.botUser.bot_user_id

    await this.setUserResponse({
      response_id: this.currentQuestionId,
      response: text,
      user_id: id
    });

    await this.responseQuestion(ctx);
  };

  selectPollOrResponse = async (text: string, ctx: TelegrafContext): Promise<void> => {
    if (this.polls.length) {
      !this.poll
        ? await this.selectPoll(text, ctx)
        : await this.responsePoll(text, ctx);
    }
  }

  endPoll = async (text: string): Promise<void> => {
    await PollResponsesRepository.post(this.responses);
    await this.clearPollStatus();
  };

  finishPoll = async (text: string, ctx: TelegrafContext): Promise<void> => {
    const { thankYouForAnsweringTheSurvey } = botWording;

    if (!this.polls.length) {
      await this.endPoll(text);
      await ctx.reply(thankYouForAnsweringTheSurvey);
    } else if(removeSensitiveCase(text) === removeSensitiveCase(exitCommand)){
      await this.clearPollStatus();
    }
  }

  runPoll = async (text: string, ctx: TelegrafContext): Promise<void>  => {
    await this.selectPollOrResponse(text, ctx);
    await this.finishPoll(text,ctx);
  }

  callPoll = (text: string, ctx: TelegrafContext, commands: CommandInterface[], pollCommand: CommandInterface | null, botUser: BotUsers): void => {
    
    if(pollCommand){
      this.runPoll(text, ctx);
    } else {
      const command = commands.find(
        (command) => command.command === pollCommandText && 
        removeSensitiveCase(text) === removeSensitiveCase(pollCommandText)
      );

      if (command) {
        this.botUser = botUser;
        this.getPolls().then(
          () => this.showAvailablePolls(ctx)
        );
        this.pollCallback(command);
      }
    }
  };

  clearPollStatus = (): void => {
    this.questions = [];
    this.poll = null;
    this.polls = [];
    this.responses = [];
    this.currentQuestionId = null;
    this.botUser = null;
    this.pollCallback(null);
  };
}

export default new BotPollController();
