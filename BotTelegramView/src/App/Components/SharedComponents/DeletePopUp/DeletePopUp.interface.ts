export interface DeletePopUpProps {
  open: boolean;
  handleClose: () => void;
  handleDelete: () => void;
}

export interface DeletePopUpContentProps {
  open: boolean;
  isOpenDrawer: boolean;
  handleClose: () => void;
  handleDelete: () => void;
}