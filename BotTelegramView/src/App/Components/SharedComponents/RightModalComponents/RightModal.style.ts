import { makeStyles } from '@material-ui/core';
import { GOOGLE_BLUE, WHITE, BLACK, BLUE } from '../../../Styles/Colors.index'

export const useStyles = makeStyles(theme => ({
  text: {
    color: WHITE,
  },
  header: {
    margin: 0,
    padding: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    background: BLUE
  },
  content: {
    height: '83vh',
    overflowY: "scroll"
  },
  footer: {
    position: 'absolute',
    bottom: '0',
    right: '0',
    padding: '15px 0px'
  },
  buttonSubmit:{
    marginRight: '28px',
    padding: '8px 18px',
    background: GOOGLE_BLUE,
    color: WHITE,
    boxShadow: 'none',
    '&:hover': {
      background: BLUE
    }
  },
  buttonClose: {
    marginRight: theme.spacing(4),
    padding: '8px 18px',
    color: BLACK,
    boxShadow: 'none',
  },
  loader: {
    zIndex: 1,
  },
  loaderContainer: {
    position: 'absolute',
    top: '25%',
    right:'25%'
  }
}))