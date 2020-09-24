import Poll from '../Entities/Models/Poll.model'
interface PollWithPagination{
    total: number;
    pollQuestion: Poll[];
}

export default PollWithPagination;