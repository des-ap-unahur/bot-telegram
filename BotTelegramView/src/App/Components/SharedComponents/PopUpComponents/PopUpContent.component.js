import { 
  withStyles, 
} from '@material-ui/core';
import MuiDialogContent from '@material-ui/core/DialogContent';

const PopUpContent = withStyles((theme) => ({
  root: {
    padding: '20px 16px 14px',
  },
}))(MuiDialogContent);

export default PopUpContent;