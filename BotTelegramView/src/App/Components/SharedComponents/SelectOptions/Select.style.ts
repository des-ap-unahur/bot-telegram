import { makeStyles } from "@material-ui/core";
import { BLACK } from "../../../Styles/Colors.index";

export const useStyles = makeStyles(theme => ({
  select: {
    marginTop: '0px !important',
    '& div':{
      color: BLACK,
    },
    '& svg':{
      fill: BLACK
    }
  }
}))