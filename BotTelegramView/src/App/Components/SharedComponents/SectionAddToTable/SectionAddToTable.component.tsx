import React from 'react';
import { SectionAddToTableProps } from './SectionAddToTable.interface';
import SectionAddToTableContent from './SectionAddToTable.content'

const SectionAddToTable = (props:SectionAddToTableProps) => {
  return (
    <SectionAddToTableContent
      {...props}
    />
  )
}

export default SectionAddToTable;