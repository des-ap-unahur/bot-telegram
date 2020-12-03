import BotSubsUsers from '../Models/BotSubsUsers.model';

interface BotSubsUsersWithPagination{
  total: number;
  botSubsUsers: BotSubsUsers[];
}

export default BotSubsUsersWithPagination;