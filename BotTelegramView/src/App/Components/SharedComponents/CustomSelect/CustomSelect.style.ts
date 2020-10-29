import { makeStyles } from "@material-ui/core/styles";
import { BLACK, RED_ALERT } from '../../../Styles/Colors.index'

export const useStyles = makeStyles(theme => ({
  selectFormControl: {
    width: '100%',
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
    marginTop: '20px',
    width: '95%'
  },
  standarWidth: {
    width: '255px'
  },
}))