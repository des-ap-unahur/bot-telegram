import { makeStyles } from "@material-ui/core/styles";
import { BLACK } from "../../Styles/Colors.index";

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyItems: 'center',
    flexGrow: 1,
    width: '100%',
    minHeight: '100vh',
  },
  container: {
    marginTop: theme.spacing(12),
    transition: theme.transitions.create(['margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  containerShift: {
    marginLeft: '300px',
    transition: theme.transitions.create(['margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  title: {
    color: BLACK
  },
}))