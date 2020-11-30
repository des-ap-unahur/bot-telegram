import BotSubsUsers from '../Entities/Models/BotSubsUsers.model';

interface BotSubsUsersWithPagination{
  total: number;
  botSubsUsers: BotSubsUsers[];
}

export default BotSubsUsersWithPagination;