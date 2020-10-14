import React, { useState, useEffect } from 'react';
import { Checkbox } from '@material-ui/core';

const CheckAction = ({check, id, onChange}) => {
  const [ checked, setChecked ] = useState(check);

  useEffect(()=>{
    setChecked(check)
  }, [check])

  const handleChange = event => {
    onChange(id)
  };

  return <Checkbox
    onChange={handleChange}
    checked={checked}
  />
}

export default CheckAction;