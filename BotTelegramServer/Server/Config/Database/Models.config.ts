import BotCommand from '../../Models/BotCommands.model';
import BotNestedCommands from '../../Models/BotNestedCommands.model';
import BotResponseFiles from '../../Models/BotResponseFiles.model';
import BotResponses from '../../Models/BotResponses.model';
import BotSubsUsers from '../../Models/BotSubsUsers.model';
import BotUsers from '../../Models/BotUsers.model';
import CommandTypes from '../../Models/CommandsTypes.model';
import GuaraniData from '../../Models/GuaraniData.models';
import Poll from '../../Models/Poll.model';
import PollQuestion from '../../Models/PollQuestion.model';
import PollResponses from '../../Models/PollResponses.model';
import PollRolesAccess from '../../Models/PollRolesAccess.model';
import Roles from '../../Models/Roles.model';
import User from '../../Models/User.model';
import UserBackOffice from '../../Models/UserBackOffice.model';
import UserTypes from '../../Models/UserTypes.model';

export const ModelList = [
  BotCommand,
  BotNestedCommands,
  BotResponseFiles,
  BotResponses,
  BotSubsUsers,
  BotUsers,
  CommandTypes,
  GuaraniData,
  Poll,
  PollQuestion,
  PollResponses,
  PollRolesAccess,
  Roles,
  User,
  UserBackOffice,
  UserTypes
]