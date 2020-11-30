import React, { useContext } from 'react';
import {
  Paper,
  TableContainer,
  Table,
  TableBody,
  CircularProgress,
  Typography,
  Box
} from '@material-ui/core'
import TableBodyRow from './Content/TableBody/TableBody.component';
import TableHeaderComponent from './Content/TableHeader/TableHeader.component';
import TableSkeleton from './Content/TableSkeleton/TableSkeleton.component';
import { LanguageContext } from '../../../Config/Lang/Lang.languaje'
import { useStyles } from './SimpleTable.style';
import { SimpleTableContentProps } from './SimpleTable.interface';

const TableContent = (props: SimpleTableContentProps) => {
  const { table, fetchingLoader, loaderContainer, noDocumentsFound } = useStyles();
  const { language } = useContext(LanguageContext);
  const skeletonRows = 3;
  const {
    config, 
    dataset, 
    loader
  } = props;

  return (
    <TableContainer 
      component={Paper} 
      className={table}
    >
      { loader &&
        <div className={loaderContainer} >
          <CircularProgress className={fetchingLoader} size={50} />
        </div>
      }
      {
        (!loader && !dataset.length) && 
          <Typography 
            className={noDocumentsFound} 
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
                rowsPerPage={skeletonRows}
              />
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableContent;