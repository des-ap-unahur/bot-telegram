import { makeStyles } from "@material-ui/core/styles";
import { BLACK, GOOGLE_BLUE, WHITE, BLUE } from "../../Styles/Colors.index";

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyItems: 'center',
    flexGrow: 1,
    width: '100%',
    height: '100%',
    minHeight: '30vh',
  },
  container: {
    display: 'flex',
    justifyItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing(12),
    transition: theme.transitions.create(['margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: "column",
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
  cardContainer: {
    display: "flex",
    marginBottom: "20px",
    "& div":{
      marginBottom: "20px"
    }
  },
  card: {
    marginRight: "30px"
  },
  buttonStyle:{
    marginLeft: '28px',
    float: 'right',
    padding: '8px 18px',
    background: GOOGLE_BLUE,
    color: WHITE,
    boxShadow: 'none',
    margin: "20px 0px",
    '&:hover': {
      background: BLUE
    }
  },
}))