import BotCommand from '../../Entities/Models/BotCommands.model';
import BotNestedCommands from '../../Entities/Models/BotNestedCommands.model';
import BotResponseFiles from '../../Entities/Models/BotResponseFiles.model';
import BotResponses from '../../Entities/Models/BotResponses.model';
import BotSubsUsers from '../../Entities/Models/BotSubsUsers.model';
import BotUsers from '../../Entities/Models/BotUsers.model';
import CommandTypes from '../../Entities/Models/CommandsTypes.model';
import GuaraniUsers from '../../Entities/Models/GuaraniUsers.models';
import Poll from '../../Entities/Models/Poll.model';
import PollQuestion from '../../Entities/Models/PollQuestions.model';
import PollResponses from '../../Entities/Models/PollResponses.model';
import PollRolesAccess from '../../Entities/Models/PollRolesAccess.model';
import Roles from '../../Entities/Models/Roles.model';
import UserBackOffice from '../../Entities/Models/UserBackOffice.model';
import UserTypes from '../../Entities/Models/UserTypes.model';

export const ModelList = [
  BotCommand,
  BotNestedCommands,
  BotResponseFiles,
  BotResponses,
  BotSubsUsers,
  BotUsers,
  CommandTypes,
  GuaraniUsers,
  Poll,
  PollQuestion,
  PollResponses,
  PollRolesAccess,
  Roles,
  UserBackOffice,
  UserTypes
]