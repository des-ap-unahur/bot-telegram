import Poll from '../Models/Poll.model';

interface PollWithPagination{
  total: number;
  poll: Poll[];
}

export default PollWithPagination;