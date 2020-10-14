import React from 'react';
import {
  TableCell,
  TableRow
} from '@material-ui/core';
import Skeleton from "@material-ui/lab/Skeleton";
import { useStyles } from '../../Table.style';

const TableSkeleton = ({config, rowsPerPage}) => {
  const { tableSkeleton } = useStyles();
  const skeletonRows = Array(rowsPerPage).fill(null);

  return(
    skeletonRows.map((item, index) =>
      <TableRow key={`skeletonRow ${index}`}>
        {config.map((cell, i) =>
          <TableCell key={`skeleton cell ${i}`}>
            <div className={tableSkeleton}>
              <Skeleton variant="text" animation="wave" />
            </div>
          </TableCell>
          )
        }
      </TableRow>
    )
  )
}

export default TableSkeleton;