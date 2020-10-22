import { makeStyles } from "@material-ui/core/styles";
import { SUTIL_GRAY, RED_ALERT } from '../../../Styles/Colors.index'

export const useStyles = makeStyles(theme => ({
  selectFormControl: {
    minWidth: '255px',
  },
  selectLabel:{
    display: 'flex',
    flexDirection: 'column',
    color: SUTIL_GRAY,
  },
  selectLabelAlert:{
    fontSize: '15px',
    color: RED_ALERT
  },
  selectLoader: {
    display: 'flex',
    justifyContent: 'center'
  }
}))