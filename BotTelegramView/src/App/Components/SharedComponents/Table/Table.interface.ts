export interface TableProps {
  config: any;
  dataset: any;
  loader: boolean;
  totalRows: number;
  changePage?: (page: number, pageSize: number) => Promise<void>;
}

export interface TableContentProps {
  page: number;
  loader: boolean;
  rowsPerPage: number;
  config: any;
  dataset: any;
  emptyRows: number;
  handleChangePage: (e: any, page: number) => void;
  handleChangeRowsPerPage: (e: any) => void;
  isOpenDrawer: boolean;
  rowsPerPageOptions: number[];
  totalRows: number;
  withPagination: boolean;
}

export interface TableVoidCellsProps {
  emptyRows: number;
}

export interface TableSkeletonProps {
  rowsPerPage: number;
  config: any;
}

export interface TableHeaderProps {
  config: any;
}

export interface TableBodyProps {
  config: any;
  dataset: any;
}