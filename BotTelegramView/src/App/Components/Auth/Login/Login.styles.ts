import { makeStyles } from '@material-ui/core/styles'
import { BLUE, GOOGLE_BLUE, WHITE } from '../../../Styles/Colors.index';

export const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: '30vh',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '2px solid ' + GOOGLE_BLUE,
    borderTop: '5px solid ' + GOOGLE_BLUE,
    borderBottom: '6px solid ' + GOOGLE_BLUE
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    marginRight: '28px',
    padding: '8px 18px',
    background: GOOGLE_BLUE,
    color: WHITE,
    boxShadow: 'none',
    '&:hover': {
      background: BLUE
    }
  },
}));