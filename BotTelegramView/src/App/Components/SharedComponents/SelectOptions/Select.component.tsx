import React from 'react';
import { MenuItem, Select, FormControl, InputLabel } from '@material-ui/core';
import { useStyles } from './Select.style'
import { SelectProps } from './Select.interfaces';


const SelectOptions = ({title, listOptions, handleChange, value}: SelectProps) => {
  const { select } = useStyles();
  
  return (
    <FormControl>
      { title &&
        <InputLabel>{title}</InputLabel>
      }
      <Select
        value={value}
        onChange={handleChange}
        className={select}
      >
        {listOptions.map((option, i) => 
          <MenuItem value={option.value} key={i}>{option.name}</MenuItem>
        )}
      </Select>
    </FormControl>
  )
}

export default SelectOptions;