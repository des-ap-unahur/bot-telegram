import React, { useState, useContext } from 'react';
import TableContent from './Table.content'
import { ModalControllerContext } from '../../../HOC/ModalController.hoc';
import { TableProps } from './Table.interface';

const TableComponent = ({ config, dataset, loader, totalRows, changePage}: TableProps) => {
  const [ page, setPage ] = useState(0);
  const [ rowsPerPage, setRowsPerPage ] = useState(15);
  const rowsPerPageOptions = [10, 15, 25, 50, 100];
  const { isOpenDrawer } = useContext(ModalControllerContext)

  const emptyRows = !loader ? rowsPerPage - dataset.length : 0;
  
  const handleChangePage = (event: any, newPage: number) => {
    setPage(newPage);
    changePage(newPage+1, rowsPerPage)
  };

  const handleChangeRowsPerPage = (event: any) => {
    changePage(1, event.target.value)
    setRowsPerPage(event.target.value);
    setPage(0);
  };

  return (
    <TableContent
      page={page}
      loader={loader}
      rowsPerPage={rowsPerPage}
      config={config}
      dataset={dataset}
      emptyRows={emptyRows}
      handleChangePage={handleChangePage}
      handleChangeRowsPerPage={handleChangeRowsPerPage}
      isOpenDrawer={isOpenDrawer}
      rowsPerPageOptions={rowsPerPageOptions}
      totalRows={totalRows || 0}
    />
  )
}

export default TableComponent;