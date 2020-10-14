import { makeStyles } from '@material-ui/core';
import { WHITE, ORANGE_GM2 } from '../../../Styles/Colors.index'

export const useStyles = makeStyles(theme => ({
  text: {
    color: WHITE,
  },
  header: {
    margin: 0,
    padding: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    background: ORANGE_GM2
  }
}))