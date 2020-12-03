import BotUsers from '../Models/BotUsers.model';

interface BotUserWithPagination{
  total: number;
  botUsers : BotUsers[];
}

export default BotUserWithPagination;