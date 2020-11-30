import React from 'react';
import RightModalContent from './RightModal.content';
import { RightModalInterface } from './RightModal.interface';

const RightModal = (props:RightModalInterface) => {
  return (
    <RightModalContent
      {...props}
    />
  );
}

export default RightModal;