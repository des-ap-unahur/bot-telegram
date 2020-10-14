import React from 'react';
import {
  TableCell,
  TableRow,
  Box,
} from '@material-ui/core';
import { capitalizeStrings } from '../../../../../Utils/FormatStrings.utils';
import CheckAction from '../../../CheckAction.component';
import ActionButton from '../../../ActionButtons/ActionButton.component';

const TableBodyRow = ({config, dataset}) => {
  const renderCell = cell => {
    if(!cell.nestedTable){
      return dataset[cell.property] 
    }
    return capitalizeStrings(dataset[cell.nestedTable][cell.property])
  }

  return (
    <TableRow>
      {config && config.map((cell, i) =>
        <TableCell key={`body cell ${i}`} align={''|| cell.align}>
          {
            (!cell.isCheck && !cell.isActions) ?
              <Box fontWeight={400}>
                {renderCell(cell)}
              </Box>
            :
              cell.isCheck ?
                <CheckAction
                  id={dataset.id}
                  check={Boolean(dataset[cell.property])}
                  onChange={cell.onClick}
                />
              :
                <ActionButton
                  id={dataset.id}
                  actions={cell.actions}
                />
          }
        </TableCell>
        )
      }
    </TableRow>
  )
}

export default TableBodyRow;