import { makeStyles } from "@material-ui/core/styles";
import { BLACK, RED_ALERT } from '../../../Styles/Colors.index'

export const useStyles = makeStyles(theme => ({
  selectFormControl: {
    width: '100%',
    marginTop: '20px',
  },
  selectLabel:{
    display: 'flex',
    flexDirection: 'column',
    color: BLACK,
  },
  selectLabelAlert:{
    fontSize: '15px',
    color: RED_ALERT
  },
  selectLoader: {
    display: 'flex',
    justifyContent: 'center'
  },
  widthAndMarginCorrection: {
    width: '92%'
  },
  standarWidth: {
    width: '255px'
  },
}))