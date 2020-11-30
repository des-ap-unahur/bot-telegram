export interface RightModalInterface {
  open: boolean;
  handleClose: () => void;
  children: any;
  title: string;
  fetching: boolean;
  handleSave: () => void;
}