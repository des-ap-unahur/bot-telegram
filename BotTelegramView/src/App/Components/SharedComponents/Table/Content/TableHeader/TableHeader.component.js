import React from 'react';
import {
  TableCell,
  TableHead,
  TableRow,
  Box
} from '@material-ui/core';

const TableHeaderComponent = ({config}) => (
  <TableHead>
    <TableRow>
      {config.map( (header, i) =>
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