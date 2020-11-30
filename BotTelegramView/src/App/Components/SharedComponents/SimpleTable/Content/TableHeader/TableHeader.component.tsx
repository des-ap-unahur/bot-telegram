import React from 'react';
import {
  TableCell,
  TableHead,
  TableRow,
  Box
} from '@material-ui/core';
import { SimpleTableHeaderProps } from '../../SimpleTable.interface';

const TableHeaderComponent = ({config}: SimpleTableHeaderProps) => (
  <TableHead>
    <TableRow>
      {config.map( (header:any, i:number) =>
        <TableCell key={`header cell ${i}`} align={'' || header.align}>
          <Box fontWeight={700}>
            { header.name && header.name.toUpperCase()}
          </Box>
        </TableCell>
        )
      }
    </TableRow>
  </TableHead>
)

export default TableHeaderComponent;