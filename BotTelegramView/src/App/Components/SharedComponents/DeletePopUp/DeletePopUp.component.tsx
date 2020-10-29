import React, { useContext } from 'react';
import DeletePopUpContent from './DeletePopUp.content';
import { ModalControllerContext } from '../../../HOC/ModalController.hoc';
import { DeletePopUpProps } from './DeletePopUp.interface';

const DeletePopUp = ({ open, handleClose, handleDelete }: DeletePopUpProps) => {
  const { isOpenDrawer } = useContext(ModalControllerContext);
  return (
    <DeletePopUpContent
      handleClose={handleClose}
      open={open}
      isOpenDrawer={isOpenDrawer}
      handleDelete={handleDelete}
    />
  );
}

export default DeletePopUp;