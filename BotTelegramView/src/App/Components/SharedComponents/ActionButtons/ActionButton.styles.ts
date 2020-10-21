import { makeStyles } from '@material-ui/core';
import { RED_ALERT, YELLOW, WHITE, SUTIL_GRAY} from '../../../Styles/Colors.index';

export const useStyles = makeStyles(theme => ({
  iconButton: {
    fill: '#FFF',
    width: 'auto',
    height: 'auto',
    padding: '0px 3px',
    display: 'inline-block',
    fontSize: '1.5rem',
    transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    flexShrink: 0,
    userSelect: 'none',
    marginRight: '30px',
    '& span': {
      marginTop: '5px',
      maxHeight: '25px',
    },
    '& .MuiTouchRipple-root': {
      display: 'none'
    }
  },
  iconColorRed: {
    fill: RED_ALERT,
    border: '1px solid '+ RED_ALERT,
    '&:hover':{
      fill: WHITE,
      background: RED_ALERT,
    }
  },
  iconColorYellow: {
    fill: YELLOW,
    border: '1px solid '+ YELLOW,
    '&:hover':{
      fill: WHITE,
      background: YELLOW,
    }
  },
  iconDisabled: {
    fill: SUTIL_GRAY,
    border: '1px solid '+ SUTIL_GRAY,
    '&:hover':{
      fill: WHITE,
      background: SUTIL_GRAY,
    }
  },
  actionContainer: {
    paddingLeft: '30px',
    display: 'inline-flex'
  }
}))