import React from 'react';
import { BuildInputsInterface } from './BuildInput.interface';
import { findTypeAndBuild } from './BuildInput.utils';

const BuildInputs = ({input}:BuildInputsInterface): JSX.Element => {
  return (
    findTypeAndBuild(input)
  )
}

export default BuildInputs;