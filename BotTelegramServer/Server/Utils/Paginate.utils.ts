import PaginationInterface from '../Interfaces/Pagination.interface';

const paginate = ({ page, pageSize }:any): PaginationInterface => {
  const offset: number = Number(page * pageSize);
  const limit: number = Number(pageSize);

  return {
    offset,
    limit,
  };
};

export default paginate;
