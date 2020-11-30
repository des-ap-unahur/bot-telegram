import React from 'react';
import SimpleTable from '../SimpleTable/SimpleTable.component';
import CustomSelect from '../CustomSelect/CustomSelect.component';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    margin: '25px',
    width: '100%',
  },
  selectSpacing: {
    marginBottom: '20px'
  }
}))

export interface OptionInterface {
  id: number;
  name: string;
}

interface SectionAddToTableProps {
  config: any;
  dataset: any;
  loader: boolean;
  title: string;
  handleChange: (e: any) => void;
  value: string | number | null;
  list: OptionInterface[] | null;
  disabled?: boolean;
}

const SectionAddToTable = (props:SectionAddToTableProps) => {
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

export default SectionAddToTable;