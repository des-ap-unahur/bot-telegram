import React, { useContext } from 'react';
import clsx from 'clsx';
import {
  Paper,
  TableContainer,
  Table,
  TableBody,
  CircularProgress,
  TablePagination,
  Typography,
  Box
} from '@material-ui/core'
import TableBodyRow from './Content/TableBody/TableBody.component';
import TableHeaderComponent from './Content/TableHeader/TableHeader.component';
import TableSkeleton from './Content/TableSkeleton/TableSkeleton.component';
import TableVoidCells from './Content/TableVoidCells/TableVoidCells.component';
import { LanguageContext } from '../../../Config/Lang/Lang.languaje'
import { useStyles } from './Table.style';
import { TableContentProps } from './Table.interface';

const TableContent = (props: TableContentProps) => {
  const { table, tableWithModalOpen, fetchingLoader, loaderContainer, noDocumentsFound, withModalOpen } = useStyles();
  const { language } = useContext(LanguageContext);
  const {
    isOpenDrawer, 
    config, 
    dataset, 
    loader, 
    emptyRows, 
    rowsPerPage, 
    page, 
    handleChangePage, 
    handleChangeRowsPerPage,
    rowsPerPageOptions, 
    totalRows,
    withPagination
  } = props;

  return (
    <TableContainer 
      component={Paper} 
      className={clsx(table, {
        [tableWithModalOpen]: isOpenDrawer
      })}
    >
      { loader &&
        <div className={clsx(loaderContainer, {
          [withModalOpen]: isOpenDrawer
        })} >
          <CircularProgress className={fetchingLoader} size={50} />
        </div>
      }
      {
        (!loader && !dataset.length) && 
          <Typography 
            className={clsx(noDocumentsFound, {
              [withModalOpen]: isOpenDrawer
            })} 
            variant='h4'
          >
            <Box fontWeight={700}>
              {language.noResultFound}
            </Box>
          </Typography>
      }
      <Table>
        <TableHeaderComponent
          config={config}
        />
        <TableBody>
          { !loader ?
              dataset.map( (document:any, i: number) =>
                <TableBodyRow
                  key={`row ${i}`}
                  config={config}
                  dataset={document}
                />
                )
            : 
              <TableSkeleton
                config={config}
                rowsPerPage={rowsPerPage}
              />
          }
          <TableVoidCells
            emptyRows={emptyRows}
          />
        </TableBody>
      </Table>
      {withPagination &&
        <TablePagination
          rowsPerPageOptions={rowsPerPageOptions}
          component="div"
          count={totalRows}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{disabled: Boolean(page<=0)}}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          labelRowsPerPage={language.rowsPerPage}
        />
      }
    </TableContainer>
  )
}

export default TableContent;