import { 
  withStyles 
} from '@material-ui/core';
import MuiDialogActions from '@material-ui/core/DialogActions';

const PopUpActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: '14px 0px',
  },
}))(MuiDialogActions);

export default PopUpActions