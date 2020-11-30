import React from 'react';
import SimpleTableContent from './SimpleTable.content'
import { SimpleTableProps } from './SimpleTable.interface';

const SimpleTableComponent = ({ config, dataset, loader}: SimpleTableProps) => {
  return (
    <SimpleTableContent
      loader={loader}
      config={config}
      dataset={dataset}
    />
  )
}

export default SimpleTableComponent;