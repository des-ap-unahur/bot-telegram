import BotPollController from "../Controller/BotPollController.controller";

export interface PollPendingForUser {
  user_id: number;
  poll: BotPollController;
}