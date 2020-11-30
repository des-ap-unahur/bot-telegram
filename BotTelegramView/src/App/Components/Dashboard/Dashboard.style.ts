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
    marginLeft: '80px',
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
    width: '85vw',
    display: "flex",
    marginBottom: "20px",
    "& div":{
      marginBottom: "20px"
    },
    "& div:last-child":{
      marginRight: '0px'
    }
  },
  card: {
    marginRight: "30px",
    width: '100%'
  },
  table:{
    width: '85vw'
  },
  tableCorrections: {
    width: 'calc(96vw - 300px)'
  },
  buttonStyle:{
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
  spanIcon: {
    position: 'relative',
    top: '4px',
    right: '5px'
  }
}))