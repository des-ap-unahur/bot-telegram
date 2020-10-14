import React from 'react';
import {
  TableCell,
  TableRow
} from '@material-ui/core'

const TableVoidCells = ({emptyRows}) => {
  return emptyRows > 0 && (
    <TableRow style={{ height: 53 * emptyRows }}>
      <TableCell colSpan={6} />
    </TableRow>
  )
}

export default TableVoidCells;