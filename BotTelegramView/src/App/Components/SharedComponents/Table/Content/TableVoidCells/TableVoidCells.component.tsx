import React from 'react';
import {
  TableCell,
  TableRow
} from '@material-ui/core'
import { TableVoidCellsProps } from '../../Table.interface';

const TableVoidCells = ({emptyRows}:TableVoidCellsProps) => {
  return <>
  {
    emptyRows > 0 && (
      <TableRow style={{ height: 53 * emptyRows }}>
        <TableCell colSpan={6} />
      </TableRow>
    )
  }
  </>
}

export default TableVoidCells;