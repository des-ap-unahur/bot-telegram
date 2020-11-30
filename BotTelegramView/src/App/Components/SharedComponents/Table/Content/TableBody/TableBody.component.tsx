import React from 'react';
import {
  TableCell,
  TableRow,
  Box,
} from '@material-ui/core';
import { capitalizeStrings } from '../../../../../Utils/FormatStrings.utils';
import CheckAction from '../../../CheckAction.component';
import ActionButton from '../../../ActionButtons/ActionButton.component';
import { TableBodyProps } from '../../Table.interface';

const TableBodyRow = ({config, dataset}: TableBodyProps) => {
  const renderCell = (cell: any) => {
    if(cell.nestedTable){
      const relationFound = dataset && dataset[cell.nestedTable]
      const property = relationFound && relationFound[cell.property]
      const stringCell = String(property)

      return capitalizeStrings(stringCell)
    } else if (cell.custom){
      const property = dataset[cell.property];
      return cell.custom(property)
    }
    return dataset[cell.property] 
  }

  return (
    <TableRow>
      {config && config.map((cell:any, i:number) =>
        <TableCell key={`body cell ${i}`} align={''|| cell.align}>
          {
            (!cell.isCheck && !cell.isActions) ?
              <Box fontWeight={400}>
                {renderCell(cell)}
              </Box>
            :
              cell.isCheck ?
                <CheckAction
                  id={dataset && dataset.id}
                  check={Boolean(dataset[cell.property])}
                  onChange={cell.onClick}
                />
              :
                <ActionButton
                  dataset={dataset}
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