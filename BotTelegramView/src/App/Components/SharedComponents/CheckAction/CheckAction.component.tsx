import React, { useState, useEffect } from 'react';
import { Checkbox } from '@material-ui/core';
import { CheckActionProps } from './CheckAction.interface';

const CheckAction = ({check, id, onChange}:CheckActionProps) => {
  const [ checked, setChecked ] = useState(check);

  useEffect(()=>{
    setChecked(check)
  }, [check])

  const handleChange = (event: any) => {
    onChange(id)
  };

  return <Checkbox
    onChange={handleChange}
    checked={checked}
  />
}

export default CheckAction;