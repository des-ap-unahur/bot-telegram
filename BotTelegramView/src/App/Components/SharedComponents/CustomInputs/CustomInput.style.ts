import { makeStyles } from "@material-ui/core/styles";
import { BLACK, RED_ALERT } from '../../../Styles/Colors.index'

export const useStyles = makeStyles(theme => ({
  inputFormControl: {
    width: '100%',
  },
  inputLabel:{
    display: 'flex',
    flexDirection: 'column',
    color: BLACK,
  },
  inputLabelAlert:{
    fontSize: '15px',
    color: RED_ALERT
  },
  widthAndMarginCorrection: {
    marginTop: '20px',
    width: '92%'
  },
  standarWidth: {
    width: '255px'
  },
}))