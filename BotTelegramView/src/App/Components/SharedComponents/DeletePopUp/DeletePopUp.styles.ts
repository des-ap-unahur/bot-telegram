import { makeStyles } from '@material-ui/core';
import { WHITE, BLUE, YELLOW, DARK_YELLOW, BLACK } from '../../../Styles/Colors.index'

export const useStyles = makeStyles(theme => ({
  root: {
    border: BLUE + ' solid 1px',
    background: WHITE,
  },
  popUpMargin: {
    marginLeft: '85px'
  },
  popUpMarginWithOpenModal: {
    marginLeft: '265px'
  },
  button: {
    marginRight: theme.spacing(2),
    padding: '4px 16px',
    color: BLACK,
    boxShadow: 'none',
  },
  buttonAccept:{
    marginRight: theme.spacing(2),
    padding: '4px 16px',
    background: YELLOW,
    boxShadow: 'none',
    '&:hover': {
      background: DARK_YELLOW
    }
  },
  text: {
    color: BLACK,
  },
}))