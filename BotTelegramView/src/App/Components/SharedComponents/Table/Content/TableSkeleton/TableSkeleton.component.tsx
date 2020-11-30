import React from 'react';
import {
  TableCell,
  TableRow
} from '@material-ui/core';
import Skeleton from "@material-ui/lab/Skeleton";
import { useStyles } from '../../Table.style';
import { TableSkeletonProps } from '../../Table.interface';

const TableSkeleton = ({config, rowsPerPage}: TableSkeletonProps) => {
  const { tableSkeleton } = useStyles();
  const skeletonRows = Array(rowsPerPage).fill(null);

  return(
    <>
      {
        skeletonRows.map((item: any, index: number) =>
          <TableRow key={`skeletonRow ${index}`}>
            {config.map((cell:any, i:number) =>
              <TableCell key={`skeleton cell ${i}`}>
                <div className={tableSkeleton}>
                  <Skeleton variant="text" animation="wave" />
                </div>
              </TableCell>
              )
            }
          </TableRow>
        )
      }
    </>
  )
}

export default TableSkeleton;