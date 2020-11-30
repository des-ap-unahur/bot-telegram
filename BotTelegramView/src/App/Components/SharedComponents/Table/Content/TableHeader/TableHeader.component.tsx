import React from 'react';
import {
  TableCell,
  TableHead,
  TableRow,
  Box
} from '@material-ui/core';
import { TableHeaderProps } from '../../Table.interface';

const TableHeaderComponent = ({config}:TableHeaderProps) => (
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