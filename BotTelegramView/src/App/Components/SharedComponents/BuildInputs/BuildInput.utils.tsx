import React from 'react';
import { InputsInterface } from './BuildInput.interface'
import { inputTypes } from './BuildInput.config';

export const findTypeAndBuild = (input:InputsInterface): JSX.Element => {
  const findType = inputTypes.find(type => type.type === input.type);
  const defaultType = inputTypes[1];

  return !findType ?
    defaultType && <defaultType.input 
      name={input.name}
      title={input.title}
      handleChange={input.handleChange}
      value={input.value}
      emptyFields={input.emptyFields}
      correction={input.correction}
    />
  :
    <findType.input 
      name={input.name}
      title={input.title}
      handleChange={input.handleChange}
      value={input.value}
      list={input && input.list}
      emptyFields={input.emptyFields}
      correction={input.correction}
    />
}