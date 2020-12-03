import React from 'react';
import SimpleTable from '../SimpleTable/SimpleTable.component';
import CustomSelect from '../CustomSelect/CustomSelect.component';
import { SectionAddToTableProps } from './SectionAddToTable.interface';
import { useStyles } from './SectionAddToTable.styles';

const SectionAddToTableContent = (props:SectionAddToTableProps) => {
  const {
    dataset,
    loader,
    config,
    list,
    title,
    value,
    handleChange,
    disabled
  } = props;
  const { root, selectSpacing } = useStyles();

  return (
    <div className={root}>
      <div className={selectSpacing}>
        <CustomSelect
          name={"simpleTableSelect"}
          title={title}
          list={list}
          value={value}
          handleChange={handleChange}
          disabled={disabled}
        />
      </div>
      <SimpleTable
        dataset={dataset}
        config={config}
        loader={loader}
      />
    </div>
  )
}

export default SectionAddToTableContent;